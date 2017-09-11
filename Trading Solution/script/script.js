// Initialize Firebase
var config = {
    apiKey: "AIzaSyDdb8NTGTwJjXqwhb59p-BETO2eNpepGMk",
    authDomain: "projects-database-61ad8.firebaseapp.com",
    databaseURL: "https://projects-database-61ad8.firebaseio.com",
    projectId: "projects-database-61ad8",
    storageBucket: "projects-database-61ad8.appspot.com",
    messagingSenderId: "110420406286"
  };
  firebase.initializeApp(config);
  
  var messagefile = document.getElementById('datamessage1') ;
  var object1 = document.getElementById('alertmessage') ;

function forexlibrary(){
// console.log('working')

    //forexlibrary details
var doc= document.getElementById('doc');
var image = document.getElementById('img');
var indhead = document.getElementById('indhead') ;
var inddate = document.getElementById('inddate') ;
var indetails = document.getElementById('inddetails') ;
// console.log(doc , image , indhead , inddate ,indetails)
var datab = firebase.database().ref('/data/forexlibrary/1stdetails/information/')
datab.on("child_added", (snap) => {  
var head = snap.val().text ;
var date = snap.val().date ;
var detail = snap.val().details ;
indhead.innerText = head ;
inddate.innerText = date ;
indetails.innerText = detail ;
// console.log(head);
})

var refRoot = firebase.database().ref('/data/forexlibrary/1stdetails/doc/')
refRoot.on("child_added", (snap) => {
var obj = snap.val();
var obj1 = String(obj) ;
doc.href = obj1 ;
console.log(doc)
})
    var refRoot = firebase.database().ref('/data/forexlibrary/1stdetails/image/')
    refRoot.on("child_added", (snap) => {
   var obj = snap.val();
var obj1 = String(obj) ;
image.src = obj1 ;
    })

    var refRoot = firebase.database().ref('/data/news/')
    refRoot.on("child_added", (snap) => {
   var obj = snap.val();
     object1.innerText = obj ;
    })

    var refRoot1 = firebase.database().ref('/data/news1/')
    refRoot1.on("child_added", (snap) => {
   var obj = snap.val();
     messagefile.innerText = obj ;
    })

}


