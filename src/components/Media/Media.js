import { useState, useContext } from 'react';

import Player from './Player/Player';
import VideoForm from './VideoForm/VideoForm';

import styled from 'styled-components';

import { SocketContext } from './../../contexts/SocketContext';

const MediaContainer = styled.div`
  background-color: #444647;
  width: 100%;
  overflow-y: scroll;
  padding-right: 20%;
  height: 100vh;
`;

const Media = () => {
  const socket = useContext(SocketContext);
  const [source, setSource] = useState('');

  const uploadHandler = (file) => {
    const videoUrl = window.URL.createObjectURL(file);
    setSource(videoUrl);
    // socket.emit('uploaded', myId, inputVideo.files[0].name);
  };

  return (
    <MediaContainer>
      <VideoForm onUpload={uploadHandler} />
      <Player source={source} />
    </MediaContainer>
  );
};

export default Media;
