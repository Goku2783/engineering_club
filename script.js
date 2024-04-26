// setup firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyB8MvIzF_YSMiEedaMEurjjiYAaFGiNEjg",
  authDomain: "engineering-club-d191d.firebaseapp.com",
  projectId: "engineering-club-d191d",
  storageBucket: "engineering-club-d191d.appspot.com",
  messagingSenderId: "375134642835",
  appId: "1:375134642835:web:a2b8807b984f6e91fba366"
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
  var name1 = document.getElementById("name1").value;
  var parachute1 = document.getElementById("parachute1").value;
  var Dam = document.getElementById("Dam").value;
  var spider_web = document.getElementById("spider_web").value;
  var errosion_barrier = document.getElementById("errosion_barrier").value;
  var comments1 = document.getElementById("comments1").value;
  
  var form1Data = {
    timestamp: Date.now(),
    name: name1,
    parachute: parachute1,
    Dam: Dam,
    spider_web: spider_web,
    errosion_barrier: errosion_barrier,
    comments: comments1,
  };
  var form1JSON = JSON.stringify(form1Data);
  console.log("formJSON: " + form1JSON);
  return form1Data;
}
//form2 submitted items
function submit2(){
  var name2 = document.getElementById("name2").value;
  var parachute2 = document.getElementById("parachute2").value;
  var magnetic_swin = document.getElementById("magnetic_swin").value;
  var water_filter = document.getElementById("water_filter").value;
  var stomp_rocket = document.getElementById("stomp_rocket").value;
  var comments2 = document.getElementById("comments2").value;
  
  var form2Data = {
    timestamp: Date.now(),
    name: name2,
    parachute: parachute2,
    magnetic_swin: magnetic_swin,
    water_filter: water_filter,
    stomp_rocket: stomp_rocket,
    comments: comments2,};
  var form2JSON = JSON.stringify(form2Data);
  console.log("formJSON: " + form2JSON);
  return form2Data;
}

//this method saves form1 to the database
function saveForm1() {
  console.log("saveForm1() called");
  var form1Data = saveForm1();
  db.collection("2nd/3rd Grade").doc(form1Data.name).set(form1Data);
  alert(form1Data.name1 + "save to database!");
}
//this method saves form2 to the database
function saveForm2() {
  console.log("saveForm2() called");
  var form2Data = saveForm2();
  db.collection("4th/5th Grade").doc(form2Data.name).set(form2Data);
  alert(form2Data.name2 + "save to database!");
}
