//opens first semester meeting dates table on click of button.
function toggleTable1() {
  document.getElementById("myTable1").classList.toggle("hidden");
}
//opens second semester meeting dates table on click of button.
function toggleTable2() {
  document.getElementById("myTable2").classList.toggle("hidden");
}

function toggleDiagram() {
  document.getElementById("Diagram").classList.toggle("hidden");
}

function selectedProjects1() {
  var projects_group1 = [];
  var club_one = document.forms("order1").value
  projects_group1.push(club_one);
  console.log(projects_group1);
  return projects_group1;
}

function selecedProjects2() {
  var projects_group2 = [];
  var club_two = document.forms("order2").value
  projects_group2.push(club_two);
  return projects_group2;
}

var proj_group1 = projects_group1;
var proj_group2 = projects_group2;

// save data in JSON format.
var group1JSON = JSON.stringify(proj_group1);
console.log(group1JSON)
//return group1JSON;

var group2JSON = JSON.stringify(proj_group2);
console.log(group2JSON)
//return group2JSON;



//function getID() {
//   var studentID = [];
//   var tstStudentIdVal = document.forms["getFormInfo"]["txtStudentID"].value
//   studentID.push(tstStudentIdVal);
//   var numberOnly = /^[0-9]+$/;