import firebase from 'firebase/app';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyAMTFfAfnwg6Ic8uakroc9Cjsz4dIqUU0k",
    authDomain: "xonvertech-noticeboard.firebaseapp.com",
    databaseURL: "https://xonvertech-noticeboard.firebaseio.com",
    projectId: "xonvertech-noticeboard",
    storageBucket: "xonvertech-noticeboard.appspot.com",
    messagingSenderId: "791655048213",
    appId: "1:791655048213:web:dfd07d0c3a42a4b10e9a1c",
    measurementId: "G-J8N285XWQG"
  };


export const db = firebase.initializeApp(firebaseConfig).database();
export const namesRef = db.ref('names');