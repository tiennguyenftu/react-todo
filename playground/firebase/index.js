var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCauPr8RqU3sWqnu88WNW8AAx--75V8b5o",
    authDomain: "react-todo-ce2d1.firebaseapp.com",
    databaseURL: "https://react-todo-ce2d1.firebaseio.com",
    storageBucket: "react-todo-ce2d1.appspot.com",
    messagingSenderId: "63153770480"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Tien',
        age: 21
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});

var newTodo1 = todosRef.push({
    text: 'Learn javascript'
});

todosRef.push({
    text: 'Learn node.js'
});

todosRef.child(newTodo1.key).remove();






