import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

import Media from './../components/Media/Media';
import Chat from './../components/Chat/Chat';
import LoadingSpinner from './../components/UI/LoadingSpinner';

import styled from 'styled-components';
import firebase from './../services/firebase';

import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { RoomContext } from '../contexts/RoomContext';
import { SocketContext } from '../contexts/SocketContext';

const MainContainer = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Room = () => {
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const room = useContext(RoomContext);
  const params = useParams();
  const joinedRef = useRef(false);

  const { roomId } = params;

  if (!room.state) {
    room.getRoom(roomId);
  } else if (!joinedRef.current) {
    socket.emit('join', roomId, auth.user.name);
    joinedRef.current = true;
  }

  return (
    <div>
      {!room.state ? (
        <Container>
          <LoadingSpinner />
        </Container>
      ) : (
        <React.Fragment>
          {room ? (
            <MainContainer>
              <Media />
              <Chat />
            </MainContainer>
          ) : (
            <Container>
              <h1 style={{ fontSize: 42 + 'px' }}>Room Not Found</h1>
            </Container>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Room;
