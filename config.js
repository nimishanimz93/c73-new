import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBmQvXEgsnNNafMp_bdYlTRiCSPjG8neFk",
  authDomain: "wily-app-57bc5.firebaseapp.com",
  databaseURL: "https://wily-app-57bc5.firebaseio.com",
  projectId: "wily-app-57bc5",
  storageBucket: "wily-app-57bc5.appspot.com",
  messagingSenderId: "673224318844",
  appId: "1:673224318844:web:899a508ee95e7186fdcef9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
