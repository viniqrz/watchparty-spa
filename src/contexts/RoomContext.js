import { createContext, useState } from 'react';
import { useHistory } from 'react-router';

import firebase from './../services/firebase';

const RoomContext = createContext({});

export { RoomContext };

const RoomProvider = (props) => {
  const history = useHistory();
  const [roomState, setRoomState] = useState();
  const dbRef = firebase.database().ref();

  const room = {
    state: roomState,
    createRoom(name, owner, isPrivate) {
      const id = Math.random().toString().slice(2, 10);
      const newRoom = {
        id,
        name,
        owner,
        admins: [],
        isPrivate,
        createdAt: new Date().toUTCString(),
      };
      setRoomState(newRoom);

      firebase
        .database()
        .ref('rooms/' + id)
        .set(newRoom);

      history.push('/room/' + id);
    },
    getRoom(roomId) {
      dbRef
        .child('rooms')
        .child(roomId)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setRoomState(snapshot.val());
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };

  return (
    <RoomContext.Provider value={room}>{props.children}</RoomContext.Provider>
  );
};

export default RoomProvider;
