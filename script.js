// setup firebase app and firestore database
const firebaseConfig = {
    apiKey: "AIzaSyDujA0Y34FUwFVtli0nvQdA6b7MrXelxKs",
    authDomain: "engineering-club-website.firebaseapp.com",
    projectId: "engineering-club-website",
    storageBucket: "engineering-club-website.appspot.com",
    messagingSenderId: "171639607441",
    appId: "1:171639607441:web:558ca34d2eb0a417892f30"};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

//opens first semester meeting dates table on click of button.
function toggleTable1() {
  document.getElementById("myTable1").classList.toggle("hidden");
}
//opens second semester meeting dates table on click of button.
function toggleTable2() {
  document.getElementById("myTable2").classList.toggle("hidden");
}
// Opens and hides the EDP diagram on click of button.
function toggleDiagram() {
  document.getElementById("Diagram").classList.toggle("hidden");
}
//form1 submitted items
function Submit1() {
  var name = document.getElementById("name1").value;
  var parachute = document.getElementById("parachute1").value;
  var Dam = document.getElementById("Dam").value;
  var spider_web = document.getElementById("spider_web").value;
  var errosion_barrier = document.getElementById("errosion_barrier").value;
  var formName = document.getElementById("formName").value
  var comments = document.getElementById("comments1").value;
  
  var formData = {timestamp: Date.now(), 
                  name: name,
                  parachute: parachute,
                  Dam: Dam,
                  spider_web: spider_web,
                  errosion_barrier: errosion_barrier,
                  formName: formName,
                  comments: comments,}

  //prints data to the console
  var formJSON = JSON.stringify(formData);
  console.log("formJSON: " + formJSON);
  return formData;
}

//this method saves form1 to the database
function saveForm1() {
  console.log("saveForm1() called");
  var formData = Submit1();
  db.collection("2nd/3rdGrade").doc(formData.formName).set(formData);
  alert(formData.formName+ " save to database!");}

//form2 submitted items
function Submit2() {  
  var name = document.getElementById("name2").value;
  var parachute2 = document.getElementById("parachute2").value;
  var magnetic_swing = document.getElementById("magnetic_swing").value;
  var water_filter = document.getElementById("water_filter").value;
  var rocket = document.getElementById("rocket").value;
  var formName = document.getElementById("formName").value
  var comments = document.getElementById("comments2").value;
  
  var formData = {timestamp: Date.now(),
                  name: name,
                  parachute: parachute2,
                  magnetic_swing: magnetic_swing,
                  water_filter: water_filter,
                  rocket: rocket,
                  formName: formName,
                  comments: comments,}
  //prints data to the console
  var formJSON = JSON.stringify(formData);
  console.log("formJSON: " + formJSON);
  return formData;
}

//this method saves form2 to the database
function saveForm2() {
  console.log("saveForm2() called");
  var formData = Submit2();
  db.collection("4th/5thGrade").doc(formData.formName).set(formData);
  alert(formData.formName+ " save to database!");}
