import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <svg className={classes['spinner-svg']}>
      <circle
        className={classes['spinner']}
        cx='5rem'
        cy='5rem'
        r='4rem'
        stroke='pink'
        stroke-width='10'
        fill='rgba(1,1,1,0)'
        stroke-linecap='round'
        stroke-dasharray='16rem'
      ></circle>
    </svg>
  );
};

export default LoadingSpinner;
