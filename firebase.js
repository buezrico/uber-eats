import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZytk62F20WHNevym2L3HDPT_oYhnbXNY",
  authDomain: "uber-clone-fd3f3.firebaseapp.com",
  projectId: "uber-clone-fd3f3",
  storageBucket: "uber-clone-fd3f3.appspot.com",
  messagingSenderId: "609254073186",
  appId: "1:609254073186:web:c722785414dd927cbfc23b",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA1b3dAE6ZxTznauDjeHUHqCt69hqL7jpc",
//   authDomain: "testing-apps-01.firebaseapp.com",
//   projectId: "testing-apps-01",
//   storageBucket: "testing-apps-01.appspot.com",
//   messagingSenderId: "679210515262",
//   appId: "1:679210515262:web:d6e7d5e3cbff30678e4a6f",
// };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default firebase;
