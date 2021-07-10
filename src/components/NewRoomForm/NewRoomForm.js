import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';

import './NewRoomForm.css';

import Button from './../UI/Button';

import { UserContext } from './../../contexts/UserContext';
import { RoomContext } from './../../contexts/RoomContext';

const NewRoomForm = () => {
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
      auth.user.id,
      privateInputRef.current.checked
    );
  };

  return (
    <div className='new-room-container'>
      <div className='new-room-form-container'>
        <h1>New Room</h1>
        <form onSubmit={createRoomHandler}>
          <div className='name-control'>
            <input
              required
              ref={nameInputRef}
              placeholder='Name'
              id='name'
              type='text'
              autoComplete='off'
            />
          </div>
          <div className='check-control'>
            <input ref={privateInputRef} id='check' type='checkbox' />
            <label htmlFor='check'>Private</label>
          </div>
          <Button type='submit'>Create New Room</Button>
        </form>
      </div>
    </div>
  );
};

export default NewRoomForm;
