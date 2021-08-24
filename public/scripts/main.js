var firebaseConfig = {
  apiKey: "AIzaSyAN-hlg8NpFYpQGAdjjxdrHQp8-8k55pFs",
  authDomain: "proclaimrad.firebaseapp.com",
  projectId: "proclaimrad",
  storageBucket: "proclaimrad.appspot.com",
  messagingSenderId: "479184164131",
  appId: "1:479184164131:web:3dc15e3e47fbdd9dc16896",
  measurementId: "G-1ZFEWXGVQT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function () {
  const loadEl = document.querySelector("#load");
  try {
    let app = firebase.app();
    let features = [
      "auth",
      "database",
      "firestore",
      "functions",
      "messaging",
      "storage",
      "analytics",
      "remoteConfig",
      "performance",
    ].filter((feature) => typeof app[feature] === "function");
    var docRef = app.firestore().collection("sermons").doc("URLS");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          document.getElementById("music-player").src = doc.data().url;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } catch (e) {
    console.error(e);
    // loadEl.textContent = "Error loading the Firebase SDK, check the console.";
  }
});
