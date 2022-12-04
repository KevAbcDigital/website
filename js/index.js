var firebaseConfig = {
    apiKey: "AIzaSyCSNtrDEBW0aiq_XcQd_6IfACn8r4QYsEo",
    authDomain: "abcdigital-4bfd1.firebaseapp.com",
    projectId: "abcdigital-4bfd1",
    storageBucket: "abcdigital-4bfd1.appspot.com",
    messagingSenderId: "1014127363190",
    appId: "1:1014127363190:web:48c7970c11e57e51e34b57",
    measurementId: "G-SJ7JEXQH7N"
  };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // firebase.initializeApp(firebaseConfig);

  /*
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

  

document.getElementById("btnlogin").onclick = function () {
    alert('dddddddddddddddddddddddddd');
};

*/

document.getElementById("btn-login").onclick = function () {
var email = $('#email').val();
    var password = $('#password').val();

    if(email != "" & password != "") {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error) {
            var errorCode = error.errorCode;
            var errorMessage = error.errorMessage;

            console.log(errorCode);
            console.log(errorMessage);
            
            window.alert("Message : " + errorMessage);
        });
    } else if ( email == "" ) {
        window.alert("Desolé le champ email est vide...");
    } else if ( password == "" ) {
        window.alert("Desolé le champ mot de passe est vide...");
    }};

    /*
    $("btn-login").click(function(user) 
    {
        var email = $('#email').val();
    var password = $('#password').val();

    if(email != "" & password != "") {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error) {
            var errorCode = error.errorCode;
            var errorMessage = error.errorMessage;

            console.log(errorCode);
            console.log(errorMessage);
            
            window.alert("Message : " + errorMessage);
        });
    } else if ( email == "" ) {
        window.alert("Desolé le champ email est vide...");
    } else if ( password == "" ) {
        window.alert("Desolé le champ mot de passe est vide...");
    }
    });
    */