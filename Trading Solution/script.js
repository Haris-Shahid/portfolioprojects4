/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var object1 = document.getElementById('alertmessage') ;
var object = document.getElementById('news') ;
var messagefile = document.getElementById('datamessage1') ;
var formfile = document.getElementById('dnew') ;


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
  function message(){
    //   console.log(object.value)
      var refRoot = firebase.database().ref('/data/news') ;
      refRoot.set({ todo: object.value }) ;
      object.value='' ;
      return false;
  }
  function datamessage(){
    //   console.log(formfile.value)
      var refRoot = firebase.database().ref('/data/news1/') ;
      refRoot.set({ todo: formfile.value }) ;
      formfile.value='' ;
      return false;
  }

//for signal services



function signal(){
    var pair = document.getElementById('pair') ;
    var action = document.getElementById('action') ;
    var entry = document.getElementById('entry') ;
    var tp = document.getElementById('tp') ;
    var si = document.getElementById('si') ;
    var status = document.getElementById('status') ;
    var comment = document.getElementById('comment') ;
    var Signaldate = document.getElementById('signaldate') ;
    var result = document.getElementById('result') ;
    var refRoot = firebase.database().ref('/data/pairs/pairs') ;
    refRoot.set({ 
            pair: pair.value 
        }) ;
 var refRoot1 = firebase.database().ref('/data/pairs/action') ;
        refRoot1.set({ 
            action: action.value 
            }) ;
  var refRoot2 = firebase.database().ref('/data/pairs/entry') ;
            refRoot2.set({ 
                entry: entry.value
                }) ;
    var refRoot3 = firebase.database().ref('/data/pairs/tp') ;
                refRoot3.set({ 
                    tp: tp.value
                    }) ;
    var refRoot4 = firebase.database().ref('/data/pairs/si') ;
                    refRoot4.set({ 
                        si: si.value 
                        }) ;
    var refRoot5 = firebase.database().ref('/data/pairs/status') ;
                        refRoot5.set({ 
                            status: status.value 
                            }) ;
    var refRoot6 = firebase.database().ref('/data/pairs/comment') ;
                            refRoot6.set({ 
                                comment: comment.value 
                                }) ;
 var refRoot7 = firebase.database().ref('/data/pairs/signaldate') ;
                                refRoot7.set({ 
                                    signaldate: Signaldate.value 
                                    }) ;
var refRoot8 = firebase.database().ref('/data/pairs/result') ;
                                    refRoot8.set({ 
                                        result: result.value 
                                        }) ;

        return false ;

}

function signal1(){
    var pair11 = document.getElementById('pair11') ;
    var action11 = document.getElementById('action11') ;
    var entry11 = document.getElementById('entry11') ;
    var tp11 = document.getElementById('tp11') ;
    var si11 = document.getElementById('si11') ;
    var status11 = document.getElementById('status11') ;
    var comment11 = document.getElementById('comment11') ;
    var Signaldate11 = document.getElementById('signaldate11') ;
    var result11 = document.getElementById('result11') ;

    var refRoot = firebase.database().ref('/data/pairs1/pairs') ;
    refRoot.set({ 
            pair: pair11.value 
        }) ;
 var refRoot1 = firebase.database().ref('/data/pairs1/action') ;
        refRoot1.set({ 
            action: action11.value 
            }) ;
  var refRoot2 = firebase.database().ref('/data/pairs1/entry') ;
            refRoot2.set({ 
                entry: entry11.value
                }) ;
    var refRoot3 = firebase.database().ref('/data/pairs1/tp') ;
                refRoot3.set({ 
                    tp: tp11.value
                    }) ;
    var refRoot4 = firebase.database().ref('/data/pairs1/si') ;
                    refRoot4.set({ 
                        si: si11.value 
                        }) ;
    var refRoot5 = firebase.database().ref('/data/pairs1/status') ;
                        refRoot5.set({ 
                            status: status11.value 
                            }) ;
    var refRoot6 = firebase.database().ref('/data/pairs1/comment') ;
                            refRoot6.set({ 
                                comment: comment11.value 
                                }) ;
 var refRoot7 = firebase.database().ref('/data/pairs1/signaldate') ;
                                refRoot7.set({ 
                                    signaldate: Signaldate11.value 
                                    }) ;
var refRoot8 = firebase.database().ref('/data/pairs1/result') ;
                                    refRoot8.set({ 
                                        result: result11.value 
                                        }) ;

        return false ;

}

function signal2(){
    var pair22 = document.getElementById('pair22') ;
    var action22 = document.getElementById('action22') ;
    var entry22 = document.getElementById('entry22') ;
    var tp22 = document.getElementById('tp22') ;
    var si22 = document.getElementById('si22') ;
    var status22 = document.getElementById('status22') ;
    var comment22 = document.getElementById('comment22') ;
    var Signaldate22 = document.getElementById('signaldate22') ;
    var result22 = document.getElementById('result22') ;

    var refRoot = firebase.database().ref('/data/pairs2/pairs') ;
    refRoot.set({ 
            pair: pair22.value 
        }) ;
 var refRoot1 = firebase.database().ref('/data/pairs2/action') ;
        refRoot1.set({ 
            action: action22.value 
            }) ;
  var refRoot2 = firebase.database().ref('/data/pairs2/entry') ;
            refRoot2.set({ 
                entry: entry22.value
                }) ;
    var refRoot3 = firebase.database().ref('/data/pairs2/tp') ;
                refRoot3.set({ 
                    tp: tp22.value
                    }) ;
    var refRoot4 = firebase.database().ref('/data/pairs2/si') ;
                    refRoot4.set({ 
                        si: si22.value 
                        }) ;
    var refRoot5 = firebase.database().ref('/data/pairs2/status') ;
                        refRoot5.set({ 
                            status: status22.value 
                            }) ;
    var refRoot6 = firebase.database().ref('/data/pairs2/comment') ;
                            refRoot6.set({ 
                                comment: comment22.value 
                                }) ;
 var refRoot7 = firebase.database().ref('/data/pairs2/signaldate') ;
                                refRoot7.set({ 
                                    signaldate: Signaldate22.value 
                                    }) ;
var refRoot8 = firebase.database().ref('/data/pairs2/result') ;
                                    refRoot8.set({ 
                                        result: result22.value 
                                        }) ;

        return false ;

}
//signals
var pair2 = document.getElementById('pair2') ;
var action2 = document.getElementById('action2') ;
var entry2 = document.getElementById('entry2') ;
var tp2 = document.getElementById('tp2') ;
var si2 = document.getElementById('si2') ;
var status2 = document.getElementById('status2') ;
var comment2 = document.getElementById('comment2') ;
var Signaldate2 = document.getElementById('signaldate2') ;
var result2 = document.getElementById('result2') ;

var pair3 = document.getElementById('pair3') ;
var action3 = document.getElementById('action3') ;
var entry3 = document.getElementById('entry3') ;
var tp3 = document.getElementById('tp3') ;
var si3 = document.getElementById('si3') ;
var status3 = document.getElementById('status3') ;
var comment3 = document.getElementById('comment3') ;
var Signaldate3 = document.getElementById('signaldate3') ;
var result3 = document.getElementById('result3') ;
    
var pair1 = document.getElementById('pair1') ;
var action1 = document.getElementById('action1') ;
var entry1 = document.getElementById('entry1') ;
var tp1 = document.getElementById('tp1') ;
var si1 = document.getElementById('si1') ;
var status1 = document.getElementById('status1') ;
var comment1 = document.getElementById('comment1') ;
var Signaldate1 = document.getElementById('signaldate1') ;
var result1 = document.getElementById('result1') ;


  function func(){
    
    
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
   var refRoot2 = firebase.database().ref('/data/pairs/pairs/')
   refRoot2.on("child_added", (snap) => {
  var obj = snap.val();  
  pair1.innerText = obj ;
   })
   var refRoot3 = firebase.database().ref('/data/pairs/action/')
   refRoot3.on("child_added", (snap) => {
  var obj = snap.val();  
  action1.innerText = obj ;
   })
   var refRoot4 = firebase.database().ref('/data/pairs/entry/')
   refRoot4.on("child_added", (snap) => {
  var obj = snap.val();  
  entry1.innerText = obj ;
   })
   var refRoot5 = firebase.database().ref('/data/pairs/si/')
   refRoot5.on("child_added", (snap) => {
  var obj = snap.val();  
  si1.innerText = obj ;
   })
   var refRoot6 = firebase.database().ref('/data/pairs/status/')
   refRoot6.on("child_added", (snap) => {
  var obj = snap.val();  
  status1.innerText = obj ;
   })
   var refRoot7 = firebase.database().ref('/data/pairs/comment/')
   refRoot7.on("child_added", (snap) => {
  var obj = snap.val();  
  comment1.innerText = obj ;
   })
   var refRoot8 = firebase.database().ref('/data/pairs/signaldate/')
   refRoot8.on("child_added", (snap) => {
  var obj = snap.val();  
  Signaldate1.innerText = obj ;
   })
   var refRoot9 = firebase.database().ref('/data/pairs/tp/')
   refRoot9.on("child_added", (snap) => {
  var obj = snap.val();  
  tp1.innerText = obj ;
   })
   var refRoot10 = firebase.database().ref('/data/pairs/result/')
   refRoot10.on("child_added", (snap) => {
  var obj = snap.val();  
  result1.innerText = obj ;
   })
   //2
   var refRoot11 = firebase.database().ref('/data/pairs1/pairs/')
   refRoot11.on("child_added", (snap) => {
  var obj = snap.val();  
  pair2.innerText = obj ;
   })
   var refRoot12 = firebase.database().ref('/data/pairs1/action/')
   refRoot12.on("child_added", (snap) => {
  var obj = snap.val();  
  action2.innerText = obj ;
   })
   var refRoot13 = firebase.database().ref('/data/pairs1/entry/')
   refRoot13.on("child_added", (snap) => {
  var obj = snap.val();  
  entry2.innerText = obj ;
   })
   var refRoot14 = firebase.database().ref('/data/pairs1/si/')
   refRoot14.on("child_added", (snap) => {
  var obj = snap.val();  
  si2.innerText = obj ;
   })
   var refRoot15 = firebase.database().ref('/data/pairs1/status/')
   refRoot15.on("child_added", (snap) => {
  var obj = snap.val();  
  status2.innerText = obj ;
   })
   var refRoot16 = firebase.database().ref('/data/pairs1/comment/')
   refRoot16.on("child_added", (snap) => {
  var obj = snap.val();  
  comment2.innerText = obj ;
   })
   var refRoot17 = firebase.database().ref('/data/pairs1/signaldate/')
   refRoot17.on("child_added", (snap) => {
  var obj = snap.val();  
  Signaldate2.innerText = obj ;
   })
   var refRoot18 = firebase.database().ref('/data/pairs1/tp/')
   refRoot18.on("child_added", (snap) => {
  var obj = snap.val();  
  tp2.innerText = obj ;
   })
   var refRoot19 = firebase.database().ref('/data/pairs1/result/')
   refRoot19.on("child_added", (snap) => {
  var obj = snap.val();  
  result2.innerText = obj ;
  })
//3
var refRoot20 = firebase.database().ref('/data/pairs2/pairs/')
refRoot20.on("child_added", (snap) => {
var obj = snap.val();  
pair3.innerText = obj ;
})
var refRoot21 = firebase.database().ref('/data/pairs2/action/')
refRoot21.on("child_added", (snap) => {
var obj = snap.val();  
action3.innerText = obj ;
})
var refRoot22 = firebase.database().ref('/data/pairs2/entry/')
refRoot22.on("child_added", (snap) => {
var obj = snap.val();  
entry3.innerText = obj ;
})
var refRoot23 = firebase.database().ref('/data/pairs2/si/')
refRoot23.on("child_added", (snap) => {
var obj = snap.val();  
si3.innerText = obj ;
})
var refRoot24 = firebase.database().ref('/data/pairs2/status/')
refRoot24.on("child_added", (snap) => {
var obj = snap.val();  
status3.innerText = obj ;
})
var refRoot25 = firebase.database().ref('/data/pairs2/comment/')
refRoot25.on("child_added", (snap) => {
var obj = snap.val();  
comment3.innerText = obj ;
})
var refRoot26 = firebase.database().ref('/data/pairs2/signaldate/')
refRoot26.on("child_added", (snap) => {
var obj = snap.val();  
Signaldate3.innerText = obj ;
})
var refRoot27 = firebase.database().ref('/data/pairs2/tp/')
refRoot27.on("child_added", (snap) => {
var obj = snap.val();  
tp3.innerText = obj ;
})
var refRoot28 = firebase.database().ref('/data/pairs2/result/')
refRoot28.on("child_added", (snap) => {
var obj = snap.val();  
result3.innerText = obj ;
})


}


function indicator(){
    var indicatortext = document.getElementById('indicatortext') ;
    var indicatordate = document.getElementById('indicatordate') ;
    var indicatordetails = document.getElementById('indicatordetails') ;
    var indicatordownload = document.getElementById('indicatorDownload') ;
    
    var allDetails = {
        text : indicatortext.value ,
        date : indicatordate.value ,
        details : indicatordetails.value
    }

    var db = firebase.database().ref('/data/indicatordetails') ;
    db.set({ 
            Detail: allDetails 
        }) ;
        
        return false ;

}
// function indicator1(){
//     var indicatortext = document.getElementById('indicatortext1') ;
//     var indicatordate = document.getElementById('indicatordate1') ;
//     var indicatordetails = document.getElementById('indicatordetails1') ;
//     var indicatordownload = document.getElementById('indicatorDownload1') ;
    
//     var allDetails = {
//         text : indicatortext.value ,
//         date : indicatordate.value ,
//         details : indicatordetails.value
//     }

//     var db = firebase.database().ref('/data/indicatordetails1') ;
//     db.set({ 
//             Detail: allDetails 
//         }) ;
        
//         return false ;

// }

// function indicator2(){
//     var indicatortext = document.getElementById('indicatortext2') ;
//     var indicatordate = document.getElementById('indicatordate2') ;
//     var indicatordetails = document.getElementById('indicatordetails2') ;
//     var indicatordownload = document.getElementById('indicatorDownload2') ;
    
//     var allDetails = {
//         text : indicatortext.value ,
//         date : indicatordate.value ,
//         details : indicatordetails.value
//     }

//     var db = firebase.database().ref('/data/indicatordetails2') ;
//     db.set({ 
//             Detail: allDetails 
//         }) ;
        
//         return false ;

// }

var uploader=document.getElementById('upload'),
fileButton=document.getElementById('indicatorimage');

var file ;
var storageRef;
var downloadURL;
fileButton.addEventListener('change', function(e) {
  file=e.target.files[0];
 storageRef=firebase.storage().ref("images/"+file.name).put(file);

 storageRef.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
 uploader.value=percentage;
 if (percentage==100){
 alert("file Ready to upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file Ready to upload')
    uploader.addEventListener('click',function(){

         downloadURL = storageRef.snapshot.downloadURL;  
        console.log(downloadURL)
        var db = firebase.database().ref('/data/image') ;
        db.set({ 
                url : downloadURL 
            }) ;
   

       
    })

 })

});


// var uploader=document.getElementById('upload1'),
// fileButton=document.getElementById('indicatorimage1');

// var file ;
// var storageRef;
// var downloadURL;
// fileButton.addEventListener('change', function(e) {
//   file=e.target.files[0];
//  storageRef=firebase.storage().ref("images/"+file.name).put(file);

//  storageRef.on('state_changed', function progress(snapshot){
//     console.log(snapshot)
//      var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
//  uploader.value=percentage;
//  if (percentage==100){
//  alert("file Ready to Upload");
//  }
// },function error(err){

//  },
//  function complete(){
//     console.log('file uploaded')
//     uploader.addEventListener('click',function(){

//          downloadURL = storageRef.snapshot.downloadURL;  
//         console.log(downloadURL)
//         var db = firebase.database().ref('/data/image1') ;
//         db.set({ 
//                 url : downloadURL 
//             }) ;
   

       
//     })

//  })

// });

// var uploader=document.getElementById('upload2'),
// fileButton=document.getElementById('indicatorimage2');

// var file ;
// var storageRef;
// var downloadURL;
// fileButton.addEventListener('change', function(e) {
//   file=e.target.files[0];
//  storageRef=firebase.storage().ref("images/"+file.name).put(file);

//  storageRef.on('state_changed', function progress(snapshot){
//     console.log(snapshot)
//      var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
//  uploader.value=percentage;
//  if (percentage==100){
//  alert("file Reacdy To upload");
//  }
// },function error(err){

//  },
//  function complete(){
//     console.log('file uploaded')
//     uploader.addEventListener('click',function(){

//          downloadURL = storageRef.snapshot.downloadURL;  
//         console.log(downloadURL)
//         var db = firebase.database().ref('/data/image2') ;
//         db.set({ 
//                 url : downloadURL 
//             }) ;
   

       
//     })

//  })

// });


var download=document.getElementById('download'),
fileB=document.getElementById('indicatorDownload');

var file1 ;
var storageRef1;
var downloadURL1;
fileB.addEventListener('change', function(e) {
  file1=e.target.files[0];
 storageRef1=firebase.storage().ref("doc/"+file1.name).put(file1);

 storageRef1.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
 download.value=percentage;
 if (percentage==100){
 alert("Ready to Upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file uploaded')
    download.addEventListener('click',function(){
console.log('working')
         downloadURL1 = storageRef1.snapshot.downloadURL;  
        console.log(downloadURL1)
        var db = firebase.database().ref('/data/doc') ;
        db.set({ 
                url : downloadURL1 
            }) ;
   

       
    })

 })

});


// var download1=document.getElementById('download1'),
// fileB1=document.getElementById('indicatorDownload1');

// var file1 ;
// var storageRef1;
// var downloadURL1;
// fileB1.addEventListener('change', function(e) {
//   file1=e.target.files[0];
//  storageRef1=firebase.storage().ref("doc/"+file1.name).put(file1);

//  storageRef1.on('state_changed', function progress(snapshot){
//     console.log(snapshot)
//      var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
//  download1.value=percentage;
//  if (percentage==100){
//  alert("Ready to Upload");
//  }
// },function error(err){

//  },
//  function complete(){
//     console.log('file uploaded')
//     download1.addEventListener('click',function(){
// console.log('working')
//          downloadURL1 = storageRef1.snapshot.downloadURL;  
//         console.log(downloadURL1)
//         var db = firebase.database().ref('/data/doc1') ;
//         db.set({ 
//                 url : downloadURL1 
//             }) ;
   

       
//     })

//  })

// });


// var download1=document.getElementById('download2'),
// fileB1=document.getElementById('indicatorDownload2');

// var file1 ;
// var storageRef1;
// var downloadURL1;
// fileB1.addEventListener('change', function(e) {
//   file1=e.target.files[0];
//  storageRef1=firebase.storage().ref("doc/"+file1.name).put(file1);

//  storageRef1.on('state_changed', function progress(snapshot){
//     console.log(snapshot)
//      var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
//  download1.value=percentage;
//  if (percentage==100){
//  alert("Ready to Upload");
//  }
// },function error(err){

//  },
//  function complete(){
//     console.log('file uploaded')
//     download1.addEventListener('click',function(){
// console.log('working')
//          downloadURL1 = storageRef1.snapshot.downloadURL;  
//         console.log(downloadURL1)
//         var db = firebase.database().ref('/data/doc2') ;
//         db.set({ 
//                 url : downloadURL1 
//             }) ;
   

       
//     })

//  })

// });


function func1(){

    //indicators details
var doc= document.getElementById('doc');
var image = document.getElementById('img');
var indhead = document.getElementById('indhead') ;
var inddate = document.getElementById('inddate') ;
var indetails = document.getElementById('inddetails') ;
var datab = firebase.database().ref('/data/indicatordetails/')
datab.on("child_added", (snap) => {  
var head = snap.val().text;
var date = snap.val().date ;
var detail = snap.val().details ;
indhead.innerText = head ;
inddate.innerText = date ;
indetails.innerText = detail ;

})

var refRoot = firebase.database().ref('/data/doc/')
refRoot.on("child_added", (snap) => {
var obj = snap.val();
var obj1 = String(obj) ;
doc.href = obj1 ;
console.log(doc)
})
    var refRoot = firebase.database().ref('/data/image/')
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

    // var doc1= document.getElementById('doc1');
    // var image1 = document.getElementById('img1');
    // var indhead1 = document.getElementById('indhead1') ;
    // var inddate1 = document.getElementById('inddate1') ;
    // var indetails1 = document.getElementById('inddetails1') ;
    // var datab1 = firebase.database().ref('/data/indicatordetails1/')
    // datab1.on("child_added", (snap) => {  
    // var head1 = snap.val().text;
    // var date1 = snap.val().date ;
    // var detail1 = snap.val().details ;
    // indhead1.innerHTML = head1 ;
    // inddate1.innerHTML = date1 ;
    // indetails1.innerHTML = detail1 ;
    
    // })
    
    // var refRoot = firebase.database().ref('/data/doc1/')
    // refRoot.on("child_added", (snap) => {
    // var obj = snap.val();
    // var obj1 = String(obj) ;
    // doc1.href = obj1 ;
    // console.log(doc)
    // })
    //     var refRoot = firebase.database().ref('/data/image1/')
    //     refRoot.on("child_added", (snap) => {
    //    var obj = snap.val();
    // var obj1 = String(obj) ;
    // image1.src = obj1 ;
    //     })

        // var doc2= document.getElementById('doc2');
        // var image2 = document.getElementById('img2');
        // var indhead2 = document.getElementById('indhead2') ;
        // var inddate2 = document.getElementById('inddate2') ;
        // var indetails2 = document.getElementById('inddetails2') ;
        // var datab2 = firebase.database().ref('/data/indicatordetails2/')
        // datab2.on("child_added", (snap) => {  
        // var head2 = snap.val().text;
        // var date2 = snap.val().date ;
        // var detail2 = snap.val().details ;
        // indhead2.innerHTML = head2 ;
        // inddate2.innerHTML = date2 ;
        // indetails2.innerHTML = detail2 ;
        
        // })
        
        // var refRoot = firebase.database().ref('/data/doc2/')
        // refRoot.on("child_added", (snap) => {
        // var obj = snap.val();
        // var obj2 = String(obj) ;
        // doc2.href = obj2 ;
        // console.log(doc)
        // })
        //     var refRoot = firebase.database().ref('/data/image2/')
        //     refRoot.on("child_added", (snap) => {
        //    var obj = snap.val();
        // var obj2 = String(obj) ;
        // image2.src = obj2 ;
        //     })

}


//for forex library

function forexlibrary(){
    var forextext = document.getElementById('forextext') ;
    var forexdate = document.getElementById('forexdate') ;
    var forexdetails = document.getElementById('forexdetails') ;
    var allDetails = {
        text : forextext.value ,
        date : forexdate.value ,
        details : forexdetails.value
    }
console.log(allDetails)
    var db = firebase.database().ref('/data/forexlibrary/1stdetails/information') ;
    db.set({ 
            Detail: allDetails 
        }) ;
        
        return false ;

}
// function forexlibrary1(){
//     var forextext = document.getElementById('forextext1') ;
//     var forexdate = document.getElementById('forexdate1') ;
//     var forexdetails = document.getElementById('forexdetails1') ;
//     var allDetails = {
//         text : forextext.value ,
//         date : forexdate.value ,
//         details : forexdetails.value
//     }
// console.log(allDetails)
//     var db = firebase.database().ref('/data/forexlibrary/2nddetails/information') ;
//     db.set({ 
//             Detail: allDetails 
//         }) ;
        
//         return false ;

// }
// function forexlibrary2(){
//     var forextext = document.getElementById('forextext2') ;
//     var forexdate = document.getElementById('forexdate2') ;
//     var forexdetails = document.getElementById('forexdetails2') ;
//     var allDetails = {
//         text : forextext.value ,
//         date : forexdate.value ,
//         details : forexdetails.value
//     }
// console.log(allDetails)
//     var db = firebase.database().ref('/data/forexlibrary/3rddetails/information') ;
//     db.set({ 
//             Detail: allDetails 
//         }) ;
        
//         return false ;

// }

var forexlupload=document.getElementById('forexlupload'),
forexfileupload=document.getElementById('forexfileupload');

var file ;
var storageRef;
var downloadURL;
forexfileupload.addEventListener('change', function(e) {
  file=e.target.files[0];
 storageRef=firebase.storage().ref("foreximages/"+file.name).put(file);

 storageRef.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
     forexlupload.value=percentage;
 if (percentage==100){
 alert("file Ready to upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file Ready to upload')
    forexlupload.addEventListener('click',function(){

         downloadURL = storageRef.snapshot.downloadURL;  
        console.log(downloadURL)
        var db = firebase.database().ref('/data/forexlibrary/1stdetails/image') ;
        db.set({ 
                url : downloadURL 
            }) ;
   

       
    })

 })

});

var forexlibrarydownload=document.getElementById('forexlibrarydownload'),
forexfiledownload=document.getElementById('forexfiledownload');

var file1 ;
var storageRef1;
var downloadURL1;
forexfiledownload.addEventListener('change', function(e) {
  file1=e.target.files[0];
 storageRef1=firebase.storage().ref("doc/"+file1.name).put(file1);

 storageRef1.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
     forexlibrarydownload.value=percentage;
 if (percentage==100){
 alert("Ready to Upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file uploaded')
    forexlibrarydownload.addEventListener('click',function(){
console.log('working')
         downloadURL1 = storageRef1.snapshot.downloadURL;  
        console.log(downloadURL1)
        var db = firebase.database().ref('/data/forexlibrary/1stdetails/doc') ;
        db.set({ 
                url : downloadURL1 
            }) ;
   

       
    })

 })

});

//for forex ea

function forexea(){
    var forexeatext = document.getElementById('forexeatext') ;
    var forexeadate = document.getElementById('forexeadate') ;
    var forexeadetails = document.getElementById('forexeadetails') ;
    var allDetails = {
        text : forexeatext.value ,
        date : forexeadate.value ,
        details : forexeadetails.value
    }
console.log(allDetails)
    var db = firebase.database().ref('/data/forexea/1stdetails/information') ;
    db.set({ 
            Detail: allDetails 
        }) ;
        
        return false ;

}

var forexeaupload=document.getElementById('forexeaupload'),
forexfileeaupload=document.getElementById('forexfileeaupload');

var file ;
var storageRef;
var downloadURL;
forexfileeaupload.addEventListener('change', function(e) {
  file=e.target.files[0];
 storageRef=firebase.storage().ref("foreximages/"+file.name).put(file);

 storageRef.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
     forexeaupload.value=percentage;
 if (percentage==100){
 alert("file Ready to upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file Ready to upload')
    forexeaupload.addEventListener('click',function(){

         downloadURL = storageRef.snapshot.downloadURL;  
        console.log(downloadURL)
        var db = firebase.database().ref('/data/forexea/1stdetails/image') ;
        db.set({ 
                url : downloadURL 
            }) ;
   

       
    })

 })

});


var forexeadownload=document.getElementById('forexeadownload'),
forexfileeadownload=document.getElementById('forexfileeadownload');

var file1 ;
var storageRef1;
var downloadURL1;
forexfileeadownload.addEventListener('change', function(e) {
  file1=e.target.files[0];
 storageRef1=firebase.storage().ref("forexeadoc/"+file1.name).put(file1);

 storageRef1.on('state_changed', function progress(snapshot){
    console.log(snapshot)
     var percentage=( snapshot.bytesTransferred / snapshot.totalBytes )*100;
     forexeadownload.value=percentage;
 if (percentage==100){
 alert("Ready to Upload");
 }
},function error(err){

 },
 function complete(){
    console.log('file uploaded')
    forexeadownload.addEventListener('click',function(){
console.log('working')
         downloadURL1 = storageRef1.snapshot.downloadURL;  
        console.log(downloadURL1)
        var db = firebase.database().ref('/data/forexea/1stdetails/doc') ;
        db.set({ 
                url : downloadURL1 
            }) ;
   

       
    })

 })

});



