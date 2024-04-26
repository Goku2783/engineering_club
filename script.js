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

function submit1(){
  //form1 submitted items
  var name1 = document.getElementById("name1").value;
  var parachute1 = document.getElementById("parachute1").value;
  var magnetic_swing = document.getElementById("magnetic_swing").value;
  var water_filter = document.getElementById("water_filter").value;
  var stomp_rocket = document.getElementById("stomp_rocket").value;
  var comments1 = document.getElementById("comments1").value;

  var form1 = document.getElementById("form1").innerHTML;
  console.log("form1: " + form1);  
  var storyData = {
    timestamp: Date.now(),
    name: name1,
    parachute: parachute1,
    magnetic_swing: magnetic_swing,
    water_filter: water_filter,
    stomp_rocket: stomp_rocket,
    comments: comments1,};
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyData;
}

function submit2(){
  //form2 submitted items
  var name2 = document.getElementById("name2").value;
  var parachute2 = document.getElementById("parachute2").value;
  var dam = document.getElementById("Dam").value;
  var spider_web = document.getElementById("spider_web").value;
  var errosion_barrier = document.getElementById("errosion_barrier").value;
  var comments2 = document.getElementById("comments2").value;

  var form2 = document.getElementById("form2").innerHTML;
  console.log("form2: " + form2);  
  var form2Data = {
    timestamp: Date.now(),
    name: name2,
    parachute: parachute2,
    dam: dam,
    spider_web: spider_web,
    errosion_barrier: errosion_barrier,
    comments: comments2,};
  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyData;
}

//this method saves form1 to the database
function saveForm1() {
  console.log("saveForm1() called");
  var form1Data = saveForm1();
  db.collection("form1").doc(form1Data.name).set(form1Data);
  alert(form1Data.name + "save to database!");
}
//this method saves form2 to the database
function saveForm2() {
  console.log("saveForm2() called");
  var form2Data = saveForm2();
  db.collection("form2").doc(form2Data.name).set(form2Data);
  alert(form2Data.name + "save to database!");
}



//this method retrieves the madlib from the database
function retrieveMadLib() {
  console.log("retrieveMadLib() called");
  var storyName = prompt("Enter the name of the story you want to look up:");
  db.collection("madlib")
  .doc(storyName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var storyData = doc.data();
      document.getElementById("story").innerHTML = storyData.story;
    } 
    else {
      console.log("No such document!"); 
      document.getElementById("story").innerHTML = "Story not found!";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found!";
  });
}
//This method lets you recall the madlib to edit or make changes to it. 
function editMadLib() {
  console.log("editMadLib() called");
  var storyName = prompt("Enter the name of the story you want to edit:");
  db.collection("madlib")
  .doc(storyName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var storyData = doc.data();

      document.getElementById("adjective1").value = storyData.adjective1;
      document.getElementById("adjective2").value = storyData.adjective2;
      document.getElementById("adjective3").value = storyData.adjective3;
      document.getElementById("adjective4").value = storyData.adjective4;

      document.getElementById("noun1").value = storyData.noun1;
      document.getElementById("noun2").value = storyData.noun2;
      document.getElementById("noun3").value = storyData.noun3;
      document.getElementById("noun4").value = storyData.noun4;
      document.getElementById("noun5").value = storyData.noun5;

      document.getElementById("large_number").value = storyData.large_number;
      document.getElementById("verb").value = storyData.verb;
      document.getElementById("verb_ing").value = storyData.verb_ing;
      document.getElementById("color").value = storyData.color;
      document.getElementById("name_place").value = storyData.name_place;
      document.getElementById("storyName").value = storyData.storyName;

      document.getElementById("story").innerHTML = storyData.story;
    } else {
      console.log("No such document!");
      document.getElemenById("story").innerHTML = "Story not found!";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found!";
  });
}
//This method deletes the selected data or story from the database.
function deleteMadLib() {
  console.log("deleteMadLib() called");
  var storyName = prompt("Enter the name of the story you want to delete:");
  db.collection("madlib")
  .doc(storyName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var storyData = doc.data();
      document.getElementById("story").innerHTML = storyData.storyName + " successfully deleted!";
      db.collection("madlib").doc(storyName).delete();
    } else {
      console.log("No such document!");
      document.getElementById("story").innerHTML = "Story not found!";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found!";  
  });
}