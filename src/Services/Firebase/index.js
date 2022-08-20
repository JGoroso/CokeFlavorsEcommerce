import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqmvxmNjbEHguY_iYZkrPNN7z2cf-qwvA",
  authDomain: "cokeflavorsecommerce.firebaseapp.com",
  projectId: "cokeflavorsecommerce",
  storageBucket: "cokeflavorsecommerce.appspot.com",
  messagingSenderId: "212057509493",
  appId: "1:212057509493:web:733c1b026cd5ab7d67723c",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
