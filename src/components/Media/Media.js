import { useState } from 'react';

import Player from './../Player/Player';
import VideoForm from './../VideoForm/VideoForm';

import styled from 'styled-components';

const MediaContainer = styled.div`
  background-color: grey;
  width: 100%;
`;

const Media = () => {
  const [source, setSource] = useState('');

  const uploadHandler = (file) => {
    const videoUrl = window.URL.createObjectURL(file);
    setSource(videoUrl);
  };

  return (
    <MediaContainer>
      <VideoForm onUpload={uploadHandler} />
      <Player source={source} />
    </MediaContainer>
  );
};

export default Media;
