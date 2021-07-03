import Media from './../components/Media/Media';
import Chat from './../components/Chat/Chat';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
`;

const Room = () => {
  return (
    <MainContainer>
      <Media />
      <Chat />
    </MainContainer>
  );
};

export default Room;
