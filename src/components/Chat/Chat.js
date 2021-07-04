import classes from './Chat.module.css';
import { useRef, useState, useContext } from 'react';

import { SocketContext } from './../../contexts/SocketContext';

import MessagesList from './MessagesList';

const Chat = () => {
  const [inputState, setInputState] = useState('');
  const [messages, setMessages] = useState([]);

  const inputRef = useRef('');

  const socket = useContext(SocketContext);

  socket.on('message', (content) => {
    setMessages([...messages, content]);
  });

  socket.on('joined', (name) => {
    setMessages([...messages, `${name} joined.`]);
  });

  socket.on('left', (name) => {
    setMessages([...messages, `${name} left.`]);
  });

  const sendHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value.length >= 240) return;

    setMessages([...messages, inputRef.current.value]);
    socket.emit('message', inputRef.current.value);

    setInputState('');
  };

  const typeHandler = () => {
    setInputState(inputRef.current.value);
  };

  return (
    <div className={classes['chat-container']}>
      <MessagesList messages={messages} />
      <form id='form' action=''>
        <input
          onChange={typeHandler}
          value={inputState}
          ref={inputRef}
          id='input'
          type='text'
          autoComplete='off'
        />
        <button onClick={sendHandler} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
