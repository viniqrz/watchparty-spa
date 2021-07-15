import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { UserContext } from './../../contexts/UserContext';

import Button from './../UI/Button';

import classes from './WelcomePage.module.css';
import video from './../../welcomeVideo.mp4';

const WelcomePage = () => {
  const history = useHistory();
  const auth = useContext(UserContext);
  const [user, setUser] = useState();

  setTimeout(() => {
    if (auth.user) {
      history.push('/room/new');
    }
  }, 1000);

  const signInHandler = () => {
    setUser(auth.signIn());
    if (auth.user) history.push('/room/new');
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
          <div onClick={signInHandler}>
            <Button className={classes['btn-home']}>
              <i className='fab fa-google'></i>
              <span>Sign In with Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
