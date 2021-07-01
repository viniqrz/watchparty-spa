import { useRef, useState, useEffect } from 'react';

import classes from './Player.module.css';

const Player = (props) => {
  const [fillWidth, setFillWidth] = useState();
  const [playerIcon, setPlayerIcon] = useState('fas fa-play');
  const videoRef = useRef('');
  const barRef = useRef('');

  useEffect(() => {
    videoRef.current.load();
  }, [props.source]);

  const playHandler = () => {
    if (!props.source) return;

    if (videoRef.current.paused) {
      setPlayerIcon('fas fa-pause');
      videoRef.current.play();
    } else {
      setPlayerIcon('fas fa-play');
      videoRef.current.pause();
    }
  };

  const seekHandler = (e) => {
    const barX0 = barRef.current.getBoundingClientRect().left;
    const barX1 =
      barRef.current.getBoundingClientRect().left + barRef.current.offsetWidth;

    if (e.clientX > barX0 && e.clientX < barX1) {
      const absProgress = e.clientX - barX0;
      const relativeProgress = absProgress / barRef.current.offsetWidth;
      videoRef.current.currentTime =
        relativeProgress * videoRef.current.duration;
      videoRef.current.play();
      // const action = receivedAction || {
      //   id: Math.random().toString().slice(16),
      //   user: myId,
      //   date: Date.now(),
      // };
      // socket.emit('play', videoRef.current.currentTime, Date.now(), action);
      // receivedAction = null;
    }
  };

  const timeUpdateHandler = () => {
    const progress = videoRef.current.currentTime / videoRef.current.duration;
    setFillWidth(progress * barRef.current.offsetWidth + 'px');
  };

  return (
    <div className={classes['player-container']}>
      <video
        ref={videoRef}
        onTimeUpdate={timeUpdateHandler}
        id='my-video'
        className=''
      >
        <source id='source-video' src={props.source} type='video/mp4' />
      </video>
      <div className={classes['player-controls']}>
        <div
          onClick={seekHandler}
          ref={barRef}
          className={classes['progress-bar']}
        >
          <div
            style={{ width: fillWidth }}
            className={classes['progress-bar-fill']}
          ></div>
        </div>
        <div className={classes['player-buttons']}>
          <button onClick={playHandler} className='my-btn-play'>
            <i className={playerIcon}></i>
          </button>
          <div className={classes['control-volume']}>
            <i className='fas fa-volume-down'></i>
            <input
              type='range'
              className='input-volume'
              step='0.05'
              min='0'
              max='1'
              value='1'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
