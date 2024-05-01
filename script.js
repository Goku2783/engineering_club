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

//form1 submitted and saved items
function Submit1() {
  var name = document.getElementById("name1").value;
  var parachute = document.getElementById("parachute1").value;
  var Dam = document.getElementById("Dam").value;
  var spider_web = document.getElementById("spider_web").value;
  var errosion_barrier = document.getElementById("errosion_barrier").value;
  var formName = document.getElementById("formName").value; 
  var comments = document.getElementById("comments1").value;
  
  var formData = {
    timestamp: Date.now(),
    name: name,
    parachute: parachute,
    Dam: Dam,
    spider_web: spider_web,
    errosion_barrier: errosion_barrier,
    formName: formName,
    comments: comments,
  };
  //prints data to the console
  console.log("formData: " + formData);
  //save form1 to database
  db.collection("2nd and 3rd Grade").doc(formData.formName).set(formData);
  alert(formData.formName + " save to database!");
}

//This method lets you recall form1 to edit or make changes to it. 
function editForm1() {
  console.log("editForm1() called");
  var formName = prompt("Enter the name of your form in order retrieve it:");
  db.collection("2nd and 3rd Grade")
  .doc(formName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var formData = doc.data();

      document.getElementById("name1").value = formData.name;
      document.getElementById("parachute1").value = formData.parachute;
      document.getElementById("Dam").value = formData.Dam;
      document.getElementById("spider_web").value = formData.spider_web;
      document.getElementById("errosion_barrier").value = formData.errosion_barrier;
      document.getElementById("formName").value = formData.formName;
      document.getElementById("comments1").value = formData.comments;

    } else {
      console.log("No such document!");
      alert(formName + " not found!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    alert(formName + " not found!");
  });
}

//This method deletes the selected form from form1 in the database.
function deleteForm1() {
  console.log("deleteForm1() called");
  var formName = prompt("Enter the name of your form in order delete it:");
  db.collection("2nd and 3rd Grade")
  .doc(formName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var formData = doc.data();
      document.getElementById("formName").innerHTML = formData.formName + " successfully deleted!";
      db.collection("2nd and 3rd Grade").doc(formName).delete();
      alert(formName + " successfully deleted!");
    } else {
      console.log("No such document!");
      alert(formName + " not found!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    alert(formName + " not found!");  });
}

//form2 submitted and saved items
function Submit2() {  
  var name = document.getElementById("name2").value;
  var parachute = document.getElementById("parachute2").value;
  var magnetic_swing = document.getElementById("magnetic_swing").value;
  var water_filter = document.getElementById("water_filter").value;
  var rocket = document.getElementById("rocket").value;
  var formName = document.getElementById("formName").value;
  var comments = document.getElementById("comments2").value;
  
  var formData = {
    timestamp: Date.now(),
    name: name,
    parachute: parachute,
    magnetic_swing: magnetic_swing,
    water_filter: water_filter,
    rocket: rocket,
    formName: formName,
    comments: comments,
  };
  //prints data to the console
  console.log("formData: " + formData);
  //Save form2 to database.
  db.collection("4th and 5th Grade").doc(formData.formName).set(formData);
  alert(formData.formName + " save to database!");
}

//This method lets you recall form2 to edit or make changes to it. 
function editForm2() {
  console.log("editForm2() called");
  var formName = prompt("Enter the name of your form in order retrieve it:");
  db.collection("4th and 5th Grade")
  .doc(formName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var formData = doc.data();

      document.getElementById("name2").value = formData.name;
      document.getElementById("parachute2").value = formData.parachute;
      document.getElementById("magnetic_swing").value = formData.magnetic_swing;
      document.getElementById("water_filter").value = formData.water_filter;
      document.getElementById("rocket").value = formData.rocket;
      document.getElementById("formName").value = formData.formName;
      document.getElementById("comments2").value = formData.comments;

    } else {
      console.log("No such document!");
      alert(formName + " not found!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    alert(formName + " not found!");
  });
}

//This method deletes the selected form from form2 in the database.
function deleteForm2() {
  console.log("deleteForm2() called");
  var formName = prompt("Enter the name of your form in order delete it:");
  db.collection("4th and 5th Grade")
  .doc(formName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var formData = doc.data();
      document.getElementById("formName").innerHTML = formData.formName + " successfully deleted!";
      db.collection("4th and 5th Grade").doc(formName).delete();
      alert(formName + " successfully deleted!");
    } else {
      console.log("No such document!");
      alert(formName + " not found!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    alert(formName + " not found!");  });
}