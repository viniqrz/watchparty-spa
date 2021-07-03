import { useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { SocketContext } from './../contexts/SocketContext';

const Home = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);

  const joinHandler = () => {
    const name = prompt('Enter your name');
    const room = prompt('Enter your room name');
    socket.emit('join', room, name);
    history.push(`/room/${room}`);
  };

  return (
    <div>
      <button onClick={joinHandler}>Join Room</button>
    </div>
  );
};

export default Home;
