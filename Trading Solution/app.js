var config = {
    apiKey: "AIzaSyDdb8NTGTwJjXqwhb59p-BETO2eNpepGMk",
    authDomain: "projects-database-61ad8.firebaseapp.com",
    databaseURL: "https://projects-database-61ad8.firebaseio.com",
    projectId: "projects-database-61ad8",
    storageBucket: "projects-database-61ad8.appspot.com",
    messagingSenderId: "110420406286"
  };

  firebase.initializeApp(config);


function logIn(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var member = document.getElementById("member");
    var paragraph = document.getElementById("error1");
    var err1 = 'The password is invalid or the user does not have a password.' ;
    var err2 = 'The email address is badly formatted.' ;
    var link = document.getElementById("link");
    firebase.auth().signInWithEmailAndPassword(email, password)
     .catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage)
        paragraph.innerHTML = errorMessage ;   
 })
    // if(emailUser == ""){
    //     paragraph.innerHTML = "Please Enter Your Email";
    // }
    // else if(emailUser.indexOf("@") == "-1" || emailUser.lastIndexOf(".com") == "-1"){
    //     paragraph.innerHTML = "Enter valid Email";
    // }
    // else if(pass == ""){
    //     paragraph.innerHTML = "Please Enter Your Password";
    // }
    // else if(emailUser != userE || pass != userP){
    //     paragraph.innerHTML = "LOGIN FAILED! You Entered Wrong Details.";
    //     document.getElementById("username").value = "" ;
    //     document.getElementById("password").value = "" ;
    // }
    
    // else if(emailUser === userE && pass === userP){
    //     paragraph.innerHTML = "Login Successfully......!" ;
    //     member.innerHTML = "Click Start to Play the Game  :" ;
    //     link.innerHTML = "Start" ;
    //     link.setAttribute('href','game/index.html') ; 
    // }
}