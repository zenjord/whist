import firebase from './firebaseConfig'

const auth = firebase.auth()

const registerUser = (email, password) => auth.createUserWithEmailAndPassword(email, password)

const loginUser = (email, password) => auth.signInWithEmailAndPassword(email, password)

const logoutUser = () => auth.signOut()

const sendPasswordResetEmail = email => auth.sendPasswordResetEmail(email)

const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider
    return auth.signInWithPopup(provider)
}

const subscribeToAuthChanges = handleAuthChange => {
    auth.onAuthStateChanged((user) => {
        handleAuthChange(user)
    })
}

export default {
    registerUser,
    loginUser,
    logoutUser,
    sendPasswordResetEmail,
    loginWithGoogle,
    subscribeToAuthChanges
}
