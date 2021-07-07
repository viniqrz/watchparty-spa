import React, { useCallback, useContext, useEffect, useState } from 'react';

import Media from './../components/Media/Media';
import Chat from './../components/Chat/Chat';
import LoadingSpinner from './../components/UI/LoadingSpinner';

import styled from 'styled-components';
import firebase from './../services/firebase';

import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { RoomContext } from '../contexts/RoomContext';
import { div } from 'prelude-ls';

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
  const [isLoading, setIsLoading] = useState(true);
  // const [room, setRoom] = useState();
  const dbRef = firebase.database().ref();

  const user = useContext(UserContext);
  const room = useContext(RoomContext);
  const params = useParams();

  const { roomId } = params;

  if (!room.state) {
    room.getRoom(roomId);
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
