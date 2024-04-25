// setup firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyB8MvIzF_YSMiEedaMEurjjiYAaFGiNEjg",
  authDomain: "engineering-club-d191d.firebaseapp.com",
  projectId: "engineering-club-d191d",
  storageBucket: "engineering-club-d191d.appspot.com",
  messagingSenderId: "375134642835",
  appId: "1:375134642835:web:a2b8807b984f6e91fba366"};
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
//prints data from the form into the console by saving it in an array.
i=0
function pagePrint1(form1){
  var printdata = document.getElementById("form1").elements;
  var group1 = [];
  for (var i = 0; i < printdata.length; i++)
    group1=group1+printdata[i].value+"\n"
  console.log(group1);
}
//prints data from the form into the console by saving it in an array.
function pagePrint2(form2){
  var printdata = document.getElementById("form2").elements;
  var group2 = [];
  for (var i = 0; i < printdata.length; i++)
    group1=group2+printdata[i].value+"\n"
  console.log(group2);
}