import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <svg className={classes['spinner-svg']}>
      <circle
        className={classes['spinner']}
        cx='5rem'
        cy='5rem'
        r='4rem'
        stroke='rgba(1,1,1,0.75)'
        strokeWidth='10'
        fill='rgba(1,1,1,0)'
        strokeLinecap='round'
        strokeDasharray='16rem'
      ></circle>
    </svg>
  );
};

export default LoadingSpinner;
