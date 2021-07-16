import classes from './Chat.module.css';
import { useRef, useState, useContext, useEffect } from 'react';

import { SocketContext } from './../../contexts/SocketContext';
import { UserContext } from './../../contexts/UserContext';
import { RoomContext } from './../../contexts/RoomContext';

import MessagesList from './MessagesList';

const Chat = () => {
  const [inputState, setInputState] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmotes, setShowEmotes] = useState(false);

  const inputRef = useRef('');
  const boardRef = useRef('');

  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const room = useContext(RoomContext);

  socket.on('message', (serverChatData) => {
    setMessages(serverChatData);
  });

  socket.on('joined', (serverChatData) => {
    setMessages(serverChatData);
  });

  socket.on('left', (serverChatData) => {
    setMessages(serverChatData);
  });

  const sendHandler = (e) => {
    if (e.key !== 'Enter') return;

    if (inputState.length < 1) return;

    socket.emit('message', {
      isOwner: auth.user.id === room.state.owner,
      author: auth.user.name,
      content: inputState,
    });

    setMessages([
      ...messages,
      {
        isOwner: auth.user.id === room.state.owner,
        author: auth.user.name,
        content: inputState,
      },
    ]);

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
    [...boardRef.current.children].forEach((el) => {
      if (el.alt === e.target.alt) {
        inputRef.current.value += ':' + el.alt + ':';
        setInputState(inputState + ':' + el.alt + ':');
      }
    });
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
          <div
            ref={boardRef}
            onClick={selectEmoteHandler}
            className={classes['emote-board']}
          >
            <img
              src='https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif'
              alt='mustacheParrot'
            />

            <img
              src='https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif'
              alt='cartoonParrot'
            />

            <img
              src='https://media4.giphy.com/media/XZOce3ICovscxHshz5/200w.gif'
              alt='dealWithParrot'
            />

            <img
              src='https://cdn2.scratch.mit.edu/get_image/user/60526075_60x60.png'
              alt='cookParrot'
            />
            <img
              src='https://i1.wp.com/emojis.slackmojis.com/emojis/images/1583350348/7963/mask-parrot.gif'
              alt='maskParrot'
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Chat;
