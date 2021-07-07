import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import firebase from './../services/firebase';

import { UserContext } from '../contexts/UserContext';
import { RoomContext } from '../contexts/RoomContext';

const NewRoom = () => {
  const database = firebase.database();
  const history = useHistory();
  const auth = useContext(UserContext);
  const room = useContext(RoomContext);
  const nameInputRef = useRef();
  const privateInputRef = useRef();

  if (!auth.user) history.push('/');

  const createRoomHandler = (e) => {
    e.preventDefault();

    room.createRoom(
      nameInputRef.current.value,
      auth.user.name,
      privateInputRef.current.checked
    );
  };

  return (
    <div>
      <h1>New Room</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <input required ref={nameInputRef} id='name' type='text' />
        <label htmlFor='name'>Private</label>
        <input ref={privateInputRef} id='name' type='checkbox' />
        <button type='submit' onClick={createRoomHandler}>
          Create New Room
        </button>
      </form>
    </div>
  );
};

export default NewRoom;
