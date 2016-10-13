import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCauPr8RqU3sWqnu88WNW8AAx--75V8b5o",
        authDomain: "react-todo-ce2d1.firebaseapp.com",
        databaseURL: "https://react-todo-ce2d1.firebaseio.com",
        storageBucket: "react-todo-ce2d1.appspot.com",
        messagingSenderId: "63153770480"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;