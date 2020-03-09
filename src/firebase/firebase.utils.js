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

export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) { 
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) { 
            console.log("error creating user", error.message);
        }
    }
    console.log(snapShot);
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase