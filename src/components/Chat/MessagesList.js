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
  mustacheParrot: 'https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif',
  cartoonParrot:
    'https://i.pinimg.com/originals/14/c4/ec/14c4ec61a01b4ecdf2543dddb6ed6541.gif',
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
    if (curStr.split(':mustacheParrot:') !== -1) {
      let arr = curStr.split(':mustacheParrot:');

      let newArr = [];

      for (let i = 0; i < arr.length + (arr.length - 1); i++) {
        if (i % 2 === 0) {
          newArr.push(arr[i]);
        } else {
          newArr.push(
            <img
              style={{ width: 32 + 'px' }}
              src={emotes.mustacheParrot}
              alt=''
            />
          );
        }
      }

      return newArr;
    }

    return str;
  };
  // console.log(liRef.current.offsetHeight);

  // if (ulRef) props.onRefChange(ulRef, liRef);

  return (
    <div ref={ulRef} id='messages'>
      {props.messages.map((message) => {
        return (
          <div key={Math.random()} className='message-container' ref={liRef}>
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
              {getEmojis(message.content)}
            </p>
            {/* <p>{message.content}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(MessagesList);
