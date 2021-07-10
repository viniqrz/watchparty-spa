import classes from './Chat.module.css';
import { useRef, useState, useContext } from 'react';

import { SocketContext } from './../../contexts/SocketContext';
import { UserContext } from './../../contexts/UserContext';
import { RoomContext } from './../../contexts/RoomContext';

import Button from '../UI/Button';

import MessagesList from './MessagesList';

const Chat = () => {
  const [inputState, setInputState] = useState('');
  const [messages, setMessages] = useState([]);

  const inputRef = useRef('');

  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const room = useContext(RoomContext);

  socket.on('message', (content) => {
    setMessages([...messages, content]);
  });

  socket.on('joined', (name) => {
    setMessages([...messages, { author: name, content: 'joined.' }]);
  });

  socket.on('left', (name) => {
    setMessages([...messages, { author: name, content: 'left.' }]);
  });

  const sendHandler = (e) => {
    if (e.key !== 'Enter') return;

    if (inputState.length < 1) return;

    setMessages([
      ...messages,
      {
        isOwner: auth.user.id === room.state.owner,
        author: auth.user.name,
        content: inputState,
      },
    ]);
    socket.emit('message', {
      isOwner: auth.user.id === room.state.owner,
      author: auth.user.name,
      content: inputState,
    });

    inputRef.current.value = '';
  };

  const typeHandler = () => {
    setInputState(inputRef.current.value);
  };

  // const getRef = (ulRef, liRef) => {
  //   ulRef.current.scrollTo(
  //     0,
  //     ulRef.current.scrollHeight + liRef.current.offsetHeight
  //   );
  // };

  return (
    <div className={classes['chat-container']}>
      <MessagesList messages={messages} />
      <form id='form' action=''>
        {/* <input
          onChange={typeHandler}
          value={inputState}
          ref={inputRef}
          id='input'
          type='text'
          autoComplete='off'
        /> */}
        <textarea
          onChange={typeHandler}
          onKeyPress={sendHandler}
          ref={inputRef}
          rows='3'
          placeHolder='Send your message.'
        ></textarea>
        {/* <button onClick={sendHandler} type='submit'>
          Send
        </button> */}
      </form>
    </div>
  );
};

export default Chat;
