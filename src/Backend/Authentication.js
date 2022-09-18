import * as firebase from 'firebase'
import { Alert } from 'react-native'

export async function registration(firstName,lastName,email,password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore()
        db.collection('user').doc(currentUser.uid).set({
            firstName
        })
    } catch (error) {
        Alert.alert("Something went wrong", error.message)
    }
}

export async function signIn(firstName,lastName,email,password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore()
        db.collection('user').doc(currentUser.uid).set({
            firstName
        })
    } catch (error) {
        Alert.alert("Something went wrong", error.message)
    }
}