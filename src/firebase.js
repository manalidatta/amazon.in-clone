import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTAQS4SATbIBWqvxqkDKKWm2t2Lj1QU0g",
  authDomain: "clone-7b7a6.firebaseapp.com",
  projectId: "clone-7b7a6",
  storageBucket: "clone-7b7a6.appspot.com",
  messagingSenderId: "533604229600",
  appId: "1:533604229600:web:355abd9770df80efd4cb85",
  measurementId: "G-ENJLDDZ5HC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);