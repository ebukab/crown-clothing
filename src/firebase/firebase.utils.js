import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyA0SrHJDkoRoXED6IBiNfo2zV1PbA-h9QM",
    authDomain: "crwn-db-33603.firebaseapp.com",
    databaseURL: "https://crwn-db-33603.firebaseio.com",
    projectId: "crwn-db-33603",
    storageBucket: "crwn-db-33603.appspot.com",
    messagingSenderId: "96701596075",
    appId: "1:96701596075:web:d88682904efbb3e5c3d2ee",
    measurementId: "G-ZWQ0JLQWHN"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase