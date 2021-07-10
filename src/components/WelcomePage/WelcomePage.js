import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { UserContext } from './../../contexts/UserContext';

import Button from './../UI/Button';

import classes from './WelcomePage.module.css';
import video from './../../welcomeVideo.mp4';

const WelcomePage = () => {
  const history = useHistory();
  const auth = useContext(UserContext);

  const signInHandler = () => {
    auth.signIn();
    if (auth.signIn()) history.push('/room/new');
  };

  return (
    <div className={classes['main']}>
      <video autoPlay loop muted>
        <source src={video} />
      </video>
      <div className={classes['content-container']}>
        <h1>Watchparty</h1>
        <p>
          <span className={classes['highlight']}>Lorem ipsum</span> dolor sit
          amet{' '}
          <span className={classes['highlight']}>
            consectetur adipisicing elit.
          </span>{' '}
          Ex, ad cum sapiente reiciendis voluptate.
        </p>
        <div className={classes['sign-in']}>
          <Button onClick={signInHandler} className='primary'>
            <i className='fab fa-google'></i>
            <span>Sign In with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
