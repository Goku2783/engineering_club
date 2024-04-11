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
  project_group1.push(club_one);
  console.log(project_group1);
}

function selecedProjects2() {
  var projects_group2 = [];
  var club_two = document.forms("order2").value
  project_group2.push(club_two);
  console.log(project_group2);
}

//function getID() {
//   var studentID = [];
//   var tstStudentIdVal = document.forms["getFormInfo"]["txtStudentID"].value
//   studentID.push(tstStudentIdVal);
//   var numberOnly = /^[0-9]+$/;