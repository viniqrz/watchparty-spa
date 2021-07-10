import Button from './../UI/Button';

import classes from './WelcomePage.module.css';
import video from './../../welcomeVideo.mp4';

const WelcomePage = () => {
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
          <Button className='primary'>
            <i className='fab fa-google'></i>
            <span>Sign In with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
