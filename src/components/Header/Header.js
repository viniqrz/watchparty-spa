import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes['main-header']}>
      <h1>WatchParty</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link>
              <p>Invite</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
