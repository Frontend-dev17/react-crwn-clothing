import { initializeApp } from "firebase/app"
import {
    getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCl8Ehs_yrx1BgLCmepr1fSDihdemn2A-o",
    authDomain: "crown-clothing-db-84365.firebaseapp.com",
    projectId: "crown-clothing-db-84365",
    storageBucket: "crown-clothing-db-84365.appspot.com",
    messagingSenderId: "801028375395",
    appId: "1:801028375395:web:2d4a0d877024e872be4956"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromStore = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        }
        catch (err) {
            console.log("there was an erroe while crating user", err.message)
        }
    }

    return userDocRef
}