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
  const [showEmotes, setShowEmotes] = useState(false);

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

  const openEmotesHandler = (e) => {
    e.preventDefault();
    setShowEmotes(!showEmotes);
  };

  // const getRef = (ulRef, liRef) => {
  //   ulRef.current.scrollTo(
  //     0,
  //     ulRef.current.scrollHeight + liRef.current.offsetHeight
  //   );
  // };

  const selectEmoteHandler = (e) => {
    if (e.target.alt === 'mustacheParrot') {
      console.log(1);
      inputRef.current.value += ':mustacheParrot:';
      setInputState(inputState + ':mustacheParrot:');
    }

    if (e.target.alt === 'cartoonParrot') {
      console.log(1);
      inputRef.current.value += ':cartoonParrot:';
      setInputState(inputState + ':cartoonParrot:');
    }
  };

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
          placeholder='Send your message.'
        ></textarea>
        {/* <button onClick={sendHandler} type='submit'>
          Send
        </button> */}
        <button onClick={openEmotesHandler} style={{ float: 'right' }}>
          <i className='far fa-smile'></i>
        </button>
        {showEmotes && (
          <div onClick={selectEmoteHandler} className={classes['emote-board']}>
            <img
              src='https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif'
              alt='mustacheParrot'
            />

            <img
              src='https://i.pinimg.com/originals/14/c4/ec/14c4ec61a01b4ecdf2543dddb6ed6541.gif'
              alt='cartoonParrot'
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Chat;
