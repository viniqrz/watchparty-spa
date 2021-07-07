import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { SocketContext } from './../contexts/SocketContext';
import { UserContext } from './../contexts/UserContext';

const Home = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);

  const joinHandler = () => {
    const name = prompt('Enter your name');
    const room = prompt('Enter your room name');
    socket.emit('join', room, name);
    history.push(`/room/${room}`);
  };

  if (auth.user) {
    history.push('/room/new');
  }

  const signInHandler = () => {
    // auth.signIn();
    if (auth.signIn()) history.push('/room/new');
  };

  return (
    <div>
      <button onClick={joinHandler}>Join Room</button>
      <button onClick={signInHandler}>ABC</button>
    </div>
  );
};

export default Home;
