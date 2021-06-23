import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBL9BGIJE6P7k9TRFXcvJ5JFP2LE2-Nt-I",
    authDomain: "video-chat-3a9d7.firebaseapp.com",
    projectId: "video-chat-3a9d7",
    storageBucket: "video-chat-3a9d7.appspot.com",
    messagingSenderId: "1009883740773",
    appId: "1:1009883740773:web:13d3021aa40f789357a48c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()


