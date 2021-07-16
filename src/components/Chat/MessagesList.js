import React, { useRef } from 'react';

import './MessagesList.css';

import styled from 'styled-components';

// const IconContainer = styled.span`
//   background-color: #6fb4d6;
//   color: white;
//   padding: 0px 2px;
//   width: 1.4rem;
//   height: 1.4rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const emotes = {
  mustacheParrot: {
    shortcut: ':mustacheParrot:',
    src: 'https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif',
  },
  cartoonParrot: {
    shortcut: ':cartoonParrot:',
    src: 'https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif',
  },
  dealWithParrot: {
    shortcut: ':dealWithParrot:',
    src: 'https://media4.giphy.com/media/XZOce3ICovscxHshz5/200w.gif',
  },
  cookParrot: {
    shortcut: ':cookParrot:',
    src: 'https://cdn2.scratch.mit.edu/get_image/user/60526075_60x60.png',
  },
  maskParrot: {
    shortcut: ':maskParrot:',
    src: 'https://i1.wp.com/emojis.slackmojis.com/emojis/images/1583350348/7963/mask-parrot.gif',
  },
};

const MessagesList = (props) => {
  const ulRef = useRef();
  const liRef = useRef();

  if (ulRef.current && liRef.current) {
    setTimeout(() => {
      ulRef.current.scrollTo(
        0,
        ulRef.current.scrollHeight + liRef.current.offsetHeight
      );
    }, 500);
  }

  const getEmojis = (str) => {
    let curStr = str;
    let newArr = [];

    Object.keys(emotes).forEach((el) => {
      if (curStr.includes(emotes[el].shortcut)) {
        let arr = curStr.split(emotes[el].shortcut);

        for (let i = 0; i < arr.length + (arr.length - 1); i++) {
          if (i % 2 === 0) {
            newArr.push(arr[i]);
          } else {
            newArr.push(
              <img style={{ width: 32 + 'px' }} src={emotes[el].src} alt='' />
            );
          }
        }

        curStr = newArr.join('');
      }
    });

    if (newArr.length === 0) {
      return str;
    } else {
      // console.log(1);
      return newArr;
    }
  };

  // console.log(1);

  return (
    <div ref={ulRef} id='messages'>
      {props.messages.map((message) => {
        return (
          <div className='message-container' ref={liRef}>
            <p>
              {message.isOwner && (
                <span className='icon-container'>
                  <i
                    style={{ fontSize: 16 + 'px' }}
                    className='fas fa-chess-king'
                  ></i>
                </span>
              )}
              <b> {message.author}</b>
              {message.content}
            </p>
            {/* <p>{message.content}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(MessagesList);
