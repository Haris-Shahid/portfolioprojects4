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

function forexea(){
// console.log('working')

    //forexea details
    var doc= document.getElementById('doc');
    var image = document.getElementById('img');
    var indhead = document.getElementById('indhead') ;
    var inddate = document.getElementById('inddate') ;
    var indetails = document.getElementById('inddetails') ;
    var doc1= document.getElementById('doc1');
    var image1 = document.getElementById('img1');
    var indhead1 = document.getElementById('indhead1') ;
    var inddate1 = document.getElementById('inddate1') ;
    var indetails1 = document.getElementById('inddetails1') ;
    var doc2= document.getElementById('doc2');
    var image2 = document.getElementById('img2');
    var indhead2 = document.getElementById('indhead2') ;
    var inddate2 = document.getElementById('inddate2') ;
    var indetails2 = document.getElementById('inddetails2') ;
    
    // console.log(doc , image , indhead , inddate ,indetails)
    var datab = firebase.database().ref('/data/forexea/1stdetails/information')
    datab.on("child_added", (snap) => {  
    var head = snap.val().text ;
    var date = snap.val().date ;
    var detail = snap.val().details ;
    indhead.innerText = head ;
    inddate.innerText = date ;
    indetails.innerText = detail ;
    })
    
    var datab1 = firebase.database().ref('/data/forexea/2nddetails/information/')
    datab1.on("child_added", (snap) => {  
    var head1 = snap.val().text ;
    var date1 = snap.val().date ;
    var detail1 = snap.val().details ;
    indhead1.innerText = head1 ;
    inddate1.innerText = date1 ;
    indetails1.innerText = detail1 ;
    })
    
    var datab2 = firebase.database().ref('/data/forexea/3rddetails/information/')
    datab2.on("child_added", (snap) => {  
    var head2 = snap.val().text ;
    var date2 = snap.val().date ;
    var detail2 = snap.val().details ;
    indhead2.innerText = head2 ;
    inddate2.innerText = date2 ;
    indetails2.innerText = detail2 ;
    })
    
    
    var refRoot = firebase.database().ref('/data/forexea/1stdetails/doc/')
    refRoot.on("child_added", (snap) => {
    var obj = snap.val();
    var obj1 = String(obj) ;
    doc.href = obj1 ;
    console.log(doc)
    })
        var refRoot = firebase.database().ref('/data/forexea/1stdetails/image/')
        refRoot.on("child_added", (snap) => {
       var obj = snap.val();
    var obj1 = String(obj) ;
    image.src = obj1 ;
        })
    
    
        var refRoot = firebase.database().ref('/data/forexea/2nddetails/doc/')
        refRoot.on("child_added", (snap) => {
        var obj = snap.val();
        var obj1 = String(obj) ;
        doc1.href = obj1 ;
        console.log(doc)
        })
            var refRoot = firebase.database().ref('/data/forexea/2nddetails/image/')
            refRoot.on("child_added", (snap) => {
           var obj = snap.val();
        var obj1 = String(obj) ;
        image1.src = obj1 ;
            })
        
    
    
            var refRoot = firebase.database().ref('/data/forexea/3rddetails/doc/')
            refRoot.on("child_added", (snap) => {
            var obj = snap.val();
            var obj1 = String(obj) ;
            doc2.href = obj1 ;
            console.log(doc)
            })
                var refRoot = firebase.database().ref('/data/forexea/3rddetails/image/')
                refRoot.on("child_added", (snap) => {
               var obj = snap.val();
            var obj1 = String(obj) ;
            image2.src = obj1 ;
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

