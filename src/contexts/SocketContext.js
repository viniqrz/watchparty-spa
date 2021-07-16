import { createContext } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext('');
export { SocketContext };

const socket = io();

console.log('context');

const SocketProvider = (props) => {
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
