import { initializeApp } from "firebase/app"
import {
    getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore"
//collection : reference to write a brand new collection, adding docs inside of that collection

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

// adding collection to db
// -- collectionKey is the key where the collection shows in firebase
// -- objectsToAdd is the really docs to add to the collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // adding a reference to the collection and taking in the singleton db created already 
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()

}

export const getCollectionAndDocs = async () => {
    const collectionRef = collection(db, "collection")
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
    return categoryMap
}

export const createUserDocFromStore = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation,
            })
        }
        catch (err) {
            console.log("there was an erroe while crating user", err.message)
        }
    }

    return userDocRef
}

export const signUpUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)