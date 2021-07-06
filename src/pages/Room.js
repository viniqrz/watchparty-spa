import React, { useContext } from 'react';

import Media from './../components/Media/Media';
import Chat from './../components/Chat/Chat';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const MainContainer = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
`;

const Room = () => {
  const user = useContext(UserContext);
  const params = useParams();

  const { roomId } = params;

  return (
    <MainContainer>
      <React.Fragment>
        <Media />
        <Chat />
      </React.Fragment>
    </MainContainer>
  );
};

export default Room;
