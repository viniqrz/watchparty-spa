import { useEffect, useState } from 'react';
import firebase from './../services/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

const useAuth = () => {
  const [user, setUser] = useState();

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // const user = result.user;

        setUser({
          name: result.user.displayName,
          photo: result.user.photoURL,
          id: result.user.uid,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((signedUser) => {
      if (signedUser) {
        setUser({
          name: signedUser.displayName,
          photo: signedUser.photoURL,
          id: signedUser.uid,
        });
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    signIn,
  };
};

export { useAuth };
