// setup firebase app and firestore database
const firebaseConfig = {
    apiKey: "AIzaSyDujA0Y34FUwFVtli0nvQdA6b7MrXelxKs",
    authDomain: "engineering-club-website.firebaseapp.com",
    projectId: "engineering-club-website",
    storageBucket: "engineering-club-website.appspot.com",
    messagingSenderId: "171639607441",
    appId: "1:171639607441:web:558ca34d2eb0a417892f30"
  };
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
function submit1() {
  var name = document.getElementById("name1").value;
  var parachute = document.getElementById("parachute1").value;
  var Dam = document.getElementById("Dam").value;
  var spider_web = document.getElementById("spider_web").value;
  var errosion_barrier = document.getElementById("errosion_barrier").value;
  var comments = document.getElementById("comments1").value;
  
  var formData = {
    timestamp: Date.now(),
    name: name,
    parachute: parachute,
    Dam: Dam,
    spider_web: spider_web,
    errosion_barrier: errosion_barrier,
    comments: comments,};
  var formJSON = JSON.stringify(formData);
  console.log("formJSON: " + formJSON);
  return formData;
}

//this method saves form1 to the database
function saveForm1() {
  console.log("saveForm1() called");
  var form1Data = submit1();
  db.collection("2nd/3rd_Grade").doc(form1Data.name).set(form1Data);
  alert(form1Data.name + "save to database!");}

//form2 submitted items
function submit2() {
  var name = document.getElementById("name2").value;
  var parachute = document.getElementById("parachute2").value;
  var magnetic_swin = document.getElementById("magnetic_swin").value;
  var water_filter = document.getElementById("water_filter").value;
  var stomp_rocket = document.getElementById("stomp_rocket").value;
  var comments = document.getElementById("comments2").value;
  
  var formData = {
    timestamp: Date.now(),
    name: name,
    parachute: parachute,
    magnetic_swin: magnetic_swin,
    water_filter: water_filter,
    stomp_rocket: stomp_rocket,
    comments: comments,};
  var formJSON = JSON.stringify(formData);
  console.log("formJSON: " + formJSON);
  return formData;
}

//this method saves form2 to the database
function saveForm2() {
  console.log("saveForm2() called");
  var form2Data = submit2();
  db.collection("4th/5th_Grade").doc(form2Data.name).set(form2Data);
  alert(form2Data.name + "save to database!");}
