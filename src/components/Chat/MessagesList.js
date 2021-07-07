import React, { useRef } from 'react';

import styled from 'styled-components';

const IconContainer = styled.div`
  background-color: blue;
  color: white;
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
    <ul ref={ulRef} id='messages'>
      {props.messages.map((message) => {
        return (
          <li ref={liRef}>
            <p>
              {message.isOwner && (
                <IconContainer>
                  <i
                    style={{ fontSize: 16 + 'px' }}
                    class='fas fa-chess-king'
                  ></i>
                </IconContainer>
              )}
              <b> {message.author}</b> {'   ' + message.content}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(MessagesList);
