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
import SignInBox from './../components/SignInBox/SignInBox';
import Button from './../components/UI/Button';

import styled from 'styled-components';
import firebase from './../services/firebase';

import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { RoomContext } from '../contexts/RoomContext';
import { SocketContext } from '../contexts/SocketContext';

const MainContainer = styled.div`
  background-color: grey;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
`;

const Container = styled.div`
  height: 100vh;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 33, 36);
  background: radial-gradient(
    circle,
    rgba(0, 33, 36, 1) 0%,
    rgba(163, 163, 163, 1) 0%,
    rgb(80, 80, 80) 100%
  );
`;

const Room = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const room = useContext(RoomContext);
  const params = useParams();
  const joinedRef = useRef(false);
  const [user, setUser] = useState(false);

  const { roomId } = params;

  // setTimeout(() => {
  //   if (auth.user) {
  //     history.push('/room/new');
  //   }
  // }, 1000);

  const signInHandler = () => {
    console.log(1);
    setUser(auth.signIn());
    console.log(1);
  };

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
            <React.Fragment>
              {!user && !auth.user && (
                <Container>
                  <h1 style={{ margin: 3 + 'rem' }}>
                    You have to sign in in order to have access.
                  </h1>
                  <div onClick={signInHandler}>
                    <Button>
                      <i className='fab fa-google'></i>
                      <span>Sign In with Google</span>
                    </Button>
                  </div>
                </Container>
              )}
              {auth.user && (
                <MainContainer>
                  <Media />
                  <Chat />
                </MainContainer>
              )}
            </React.Fragment>
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
