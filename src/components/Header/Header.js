import classes from './Header.module.css';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { RoomContext } from '../../contexts/RoomContext';

const Header = () => {
  const room = useContext(RoomContext);
  const auth = useContext(UserContext);

  const getInvitationHandler = () => {
    console.log(1);
  };

  return (
    <header className={classes['main-header']}>
      <h1>WatchParty</h1>
      {auth.user && (
        <div className={classes['user-greeting']}>
          <h3>Welcome, {auth.user.name}.</h3>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          {room.state && (
            <li className={classes['invite']} onClick={getInvitationHandler}>
              <i className='fas fa-link'></i>
              <p>Invite Friends</p>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
