import classes from './Header.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../../contexts/SocketContext';

const Header = () => {
  const socket = useContext(SocketContext);

  return (
    <header className={classes['main-header']}>
      <h1>WatchParty</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>
              <p>Home</p>
            </a>
          </li>
          <li>
            <Link to=''>
              <p>Invite</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
