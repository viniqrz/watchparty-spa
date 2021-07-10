import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { SocketContext } from './../contexts/SocketContext';
import { UserContext } from './../contexts/UserContext';

import Button from './../components/UI/Button';
import WelcomePage from './../components/WelcomePage/WelcomePage';

const Home = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);

  // if (auth.user) {
  //   history.push('/room/new');
  // }

  const signInHandler = () => {
    // auth.signIn();
    if (auth.signIn()) history.push('/room/new');
  };

  return (
    <div>
      <WelcomePage />
    </div>
  );
};

export default Home;
