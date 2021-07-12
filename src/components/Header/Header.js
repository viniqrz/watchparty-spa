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

  const normalizeName = (name) => {
    if (name.length > 20) {
      let normalized = '';

      for (const i of name) {
        if (i === ' ') {
          return normalized;
        }

        normalized += i;
      }

      return name.slice(0, 19) + '...';
    } else {
      return name;
    }
  };

  return (
    <header className={classes['main-header']}>
      <h1>WatchParty</h1>
      {auth.user && (
        <div className={classes['user-greeting']}>
          <h3>Welcome, {normalizeName(auth.user.name)}</h3>
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
              <p>Get Link</p>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
