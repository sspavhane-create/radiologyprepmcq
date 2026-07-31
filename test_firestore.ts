import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const app = initializeApp({});
const db1 = getFirestore(app, "(default)");
const db2 = initializeFirestore(app, { experimentalForceLongPolling: true }, "(default)");
console.log("Success");
