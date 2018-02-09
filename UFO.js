
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var UFOdata = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < UFOdata.length; i++) {
    var ufo = UFOdata[i];
    var fields = Object.keys(ufo);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterState = $stateInput.value.trim().toLowerCase();
  UFOdata = dataSet.filter(function(address) {
    var addressState = address.state.substring(0, filterState.length).toLowerCase();
    return addressState === filterState;
  });
  renderTable();
}
renderTable();

// ----

// ## Stck Overflow for Multiple Column handleSearch

// function myFunction() {
//   var input = document.getElementById("myInput");
//   var filter = input.value.toUpperCase();
//   var table = document.getElementById("myTable");
//   var tr = table.getElementsByTagName("tr");
//   var tds = tr.getElementsByTagName('td');

//   for (var i = 0; i < tr.length; i++) {
//       var firstCol = tds[0].textContent.toUpperCase();
//       var secondCol = tds[1].textContent.toUpperCase();
//       if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
//           tr[i].style.display = "";
//       } else {
//           tr[i].style.display = "none";
//       }      
//   }
// }