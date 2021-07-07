import classes from './Header.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../contexts/SocketContext';

import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const auth = useContext(UserContext);
  const socket = useContext(SocketContext);

  return (
    <header className={classes['main-header']}>
      <h1>WatchParty</h1>
      {auth.user && (
        <div className={classes['user-greeting']}>
          <img src={auth.user.photo} alt='' />
          <h3>Welcome, {auth.user.name}.</h3>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <a href='/'>
              <p>Home</p>
            </a>
          </li>
          <li>
            <p>Invite</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
