import { createContext } from 'react';
import { useAuth } from './../hooks/use-auth';
import firebase from './../services/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

const UserContext = createContext({});
export { UserContext };

const UserProvider = (props) => {
  const auth = useAuth();

  return (
    <UserContext.Provider value={auth}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
