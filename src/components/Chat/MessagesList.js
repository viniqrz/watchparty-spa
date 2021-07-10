import React, { useRef } from 'react';

import './MessagesList.css';

import styled from 'styled-components';

const IconContainer = styled.span`
  background-color: #6fb4d6;
  color: white;
  padding: 0px 2px;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  // console.log(liRef.current.offsetHeight);

  // if (ulRef) props.onRefChange(ulRef, liRef);

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
              {'   ' + message.content}
            </p>
            {/* <p>{message.content}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(MessagesList);
