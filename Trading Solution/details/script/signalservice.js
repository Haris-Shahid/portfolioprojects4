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

var db = firebase.database();
var dbRef = db.ref('signalservices/data');
var deRef1 = db.ref('signalservices');

function loadData() {
    dbRef.on('child_added', snap => {
        arr = [];
        
        arr.push(snap.val())
        arr.map((service)=>{ 
            var newRow = table.insertRow(table.length),
            cell0 = newRow.insertCell(0) ,
            cell1 = newRow.insertCell(1) ,
            cell2 = newRow.insertCell(2) ,
            cell3 = newRow.insertCell(3) ,
            cell4 = newRow.insertCell(4) ,
            cell5 = newRow.insertCell(5) ,
            cell6 = newRow.insertCell(6) ,
            cell7 = newRow.insertCell(7) ,
            cell8 = newRow.insertCell(8) ;
            cell0.innerHTML = service.pair ;
            cell1.innerHTML = service.action ;
            cell2.innerHTML = service.entry ;
            cell3.innerHTML = service.TP ;
            cell4.innerHTML = service.SI ;
            cell5.innerHTML = service.status ;
            cell6.innerHTML = service.comment ;
            cell7.innerHTML = service.date ;
            cell8.innerHTML = service.result ;
            selectedRowToInput();
        })
        
    })

}

var rIndex, table = document.getElementById("table");

function checkEmptyInput() {
    var isEmpty = false,
        pair = document.getElementById('pair').value,
        action = document.getElementById('action').value,
        entry = document.getElementById('entry').value,
        TP = document.getElementById('TP').value,
        SI = document.getElementById('SI').value,
        status = document.getElementById('status').value,
        comment = document.getElementById('comment').value,
        date = document.getElementById('date').value,
        result = document.getElementById('result').value;
    if ((pair || action || entry || TP || SI || status || comment || date || result) === "") {
        isEmpty = true;
    }
    return isEmpty;
}

function addhtmltable() {
    if (!checkEmptyInput()) {
        var pair = document.getElementById('pair').value,
            action = document.getElementById('action').value,
            entry = document.getElementById('entry').value,
            TP = document.getElementById('TP').value,
            SI = document.getElementById('SI').value,
            status = document.getElementById('status').value,
            comment = document.getElementById('comment').value,
            date = document.getElementById('date').value,
            result = document.getElementById('result').value;
    
       var signalsevicedetails = { pair, action, entry, TP, SI, status, comment, date, result }

        dbRef.push(signalsevicedetails)

        document.getElementById('pair').value = "";
        document.getElementById('action').value = "";
        document.getElementById('entry').value = "";
        document.getElementById('TP').value = "";
        document.getElementById('SI').value = "";
        document.getElementById('status').value = "";
        document.getElementById('comment').value = "";
        document.getElementById('date').value = "";
        document.getElementById('result').value = "";
        
        selectedRowToInput();
    }
}

loadData();
function selectedRowToInput() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            // console.log(rIndex) ; 
            document.getElementById('pair').value = this.cells[0].innerHTML;
            document.getElementById('action').value = this.cells[1].innerHTML;
            document.getElementById('entry').value = this.cells[2].innerHTML;
            document.getElementById('TP').value = this.cells[3].innerHTML;
            document.getElementById('SI').value = this.cells[4].innerHTML;
            document.getElementById('status').value = this.cells[5].innerHTML;
            document.getElementById('comment').value = this.cells[6].innerHTML;
            document.getElementById('date').value = this.cells[7].innerHTML;
            document.getElementById('result').value = this.cells[8].innerHTML;
        }
    }
}

function edithtmltableselectedrow() {
    var pair = document.getElementById('pair').value,
        action = document.getElementById('action').value,
        entry = document.getElementById('entry').value,
        TP = document.getElementById('TP').value,
        SI = document.getElementById('SI').value,
        status = document.getElementById('status').value,
        comment = document.getElementById('comment').value,
        date = document.getElementById('date').value,
        result = document.getElementById('result').value;

    table.rows[rIndex].cells[0].innerHTML = pair;
    table.rows[rIndex].cells[1].innerHTML = action;
    table.rows[rIndex].cells[2].innerHTML = entry;
    table.rows[rIndex].cells[3].innerHTML = TP;
    table.rows[rIndex].cells[4].innerHTML = SI;
    table.rows[rIndex].cells[5].innerHTML = status;
    table.rows[rIndex].cells[6].innerHTML = comment;
    table.rows[rIndex].cells[7].innerHTML = date;
    table.rows[rIndex].cells[8].innerHTML = result;


    document.getElementById('pair').value = "";
    document.getElementById('action').value = "";
    document.getElementById('entry').value = "";
    document.getElementById('TP').value = "";
    document.getElementById('SI').value = "";
    document.getElementById('status').value = "";
    document.getElementById('comment').value = "";
    document.getElementById('date').value = "";
    document.getElementById('result').value = "";

}

function removeSelectedRow() {
    table.deleteRow(rIndex);

    document.getElementById('pair').value = "";
    document.getElementById('action').value = "";
    document.getElementById('entry').value = "";
    document.getElementById('TP').value = "";
    document.getElementById('SI').value = "";
    document.getElementById('status').value = "";
    document.getElementById('comment').value = "";
    document.getElementById('date').value = "";
    document.getElementById('result').value = "";
}
