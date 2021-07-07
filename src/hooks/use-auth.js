import { useEffect, useState } from 'react';
import firebase from './../services/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

const useAuth = () => {
  const [user, setUser] = useState(false);

  if (user) {
    firebase
      .database()
      .ref('users/' + user.id)
      .set(user);
  }

  const signIn = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        const currentUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
          id: result.user.uid,
          email: result.user.email,
        };

        setUser(currentUser);
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
          email: signedUser.email,
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
