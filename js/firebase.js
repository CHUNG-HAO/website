
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBLYOZ7DJ5iNWAMGeGhlv6DOX6eN6U_oEI",
    authDomain: "mewed-e175c.firebaseapp.com",
    projectId: "mewed-e175c",
    storageBucket: "mewed-e175c.appspot.com",
    messagingSenderId: "92567247590",
    appId: "1:92567247590:web:20ddeaac4d38f1d8aa3927",
    measurementId: "G-NJL774T4KM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
