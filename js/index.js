$("#btn-signup").click(function() 
{
    var email = $('#emailup').val();
    var password = $('#passwordup').val();
    var confirmpass = $('#confirmpass').val();

    if(email != "" & password != "" & confirmpass != "" ) {
        createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                  // Signed in 
                const user = userCredential.user;
                window.alert('user created');

               })
               .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage);
                });
        
    } else if ( email == "" ) {
        window.alert("Desolé le champ email est vide...");
    } else if ( password == "" ) {
        window.alert("Desolé le champ mot de passe est vide...");
    } else if ( confirmpass == "" ) {
        window.alert("confirmez votre passe est incorrect...");
    } else if ( password != confirmpass ) {
        window.alert("Mot de passe incorrect");
    }
});























/*

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

//firebase.initializeApp(firebaseConfig);

//firebase.auth.Auth.Persistence.LOCAL;
  
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

  

document.getElementById("btnlogin").onclick = function () {
    alert('dddddddddddddddddddddddddd');
};



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
    
  
   
    $("#btn-signup").click(function() 
    {

        window.alert("Desolé le champ email est vide...");


        
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