import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";


const initializeFirebase=()=>{
    initializeApp(firebaseConfig)
}
console.log(firebaseConfig)

export default initializeFirebase;