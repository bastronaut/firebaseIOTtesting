var config = {
  apiKey: "AIzaSyAylv4IVziF3qOUqHFH-kPbrCvWNv1C95s",
  authDomain: "iottesting-98cb6.firebaseapp.com",
  databaseURL: "https://iottesting-98cb6.firebaseio.com",
  storageBucket: "iottesting-98cb6.appspot.com",
};
firebase.initializeApp(config);


function writeData() {
  var id = Date.now();
  var dataone = document.getElementById("sampledatatwo").value;
  var datatwo = document.getElementById("sampledataone").value;
  firebase.database().ref('test/'+id).set({
    dataone: dataone,
    datatwo: datatwo
  });
}

firebase.database().ref('test/').on('value', function(snapshot) {
  console.log(snapshot.val());
  element = document.getElementById("datacontainer");
  element.innerHTML = '<p>'+JSON.stringify(snapshot.val())+'</p>';
});

writeData(1);
