import { useRef, useState, useEffect, useContext } from 'react';

import { SocketContext } from './../../../contexts/SocketContext';

import classes from './Player.module.css';

const Player = (props) => {
  const socket = useContext(SocketContext);

  const videoRef = useRef('');
  const barRef = useRef('');
  const volRef = useRef(1);

  const [fillWidth, setFillWidth] = useState();
  const [playerIcon, setPlayerIcon] = useState('fas fa-play');
  const [actionOwner, setActionOwner] = useState(undefined);
  // const [timeState, setTimeState] = useState(videoRef.currentTime);

  // let receivedAction = null;

  useEffect(() => {
    videoRef.current.load();
  }, [props.source]);

  const playHandler = () => {
    if (!props.source) return;

    if (videoRef.current.paused) {
      setPlayerIcon('fas fa-pause');
      videoRef.current.play();

      // const action = receivedAction || {
      //   id: Math.random().toString().slice(16),
      //   user: socket.id,
      //   date: Date.now(),
      // };

      socket.emit(
        'play',
        videoRef.currentTime,
        Date.now(),
        actionOwner || socket.user
      );

      setActionOwner(undefined);
    } else {
      setPlayerIcon('fas fa-play');
      videoRef.current.pause();
      socket.emit('pause', socket.id);
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
      //   user: socket.user,
      //   date: Date.now(),
      // };
      socket.emit(
        'play',
        videoRef.current.currentTime,
        Date.now(),
        actionOwner || socket.user
      );

      setActionOwner(undefined);
    }
  };

  const volumeChangeHandler = () => {
    videoRef.current.volume = volRef.current.value;
  };

  const timeUpdateHandler = () => {
    const progress = videoRef.current.currentTime / videoRef.current.duration;
    setFillWidth(progress * barRef.current.offsetWidth + 'px');
  };

  socket.on('play', (initialTime, initialDate, user) => {
    setActionOwner(user);

    if (user === socket.user) return;

    if (!props.source) return;

    const currentDate = Date.now();
    const timeDiff = (currentDate - initialDate) / 1000;
    videoRef.current.currentTime = initialTime + timeDiff;

    videoRef.current.play();
    setPlayerIcon('fas fa-pause');
  });

  socket.on('pause', (user) => {
    if (!props.source) return;

    videoRef.current.pause();
    setPlayerIcon('fas fa-play');
    setActionOwner(undefined);
  });

  socket.on('uploaded', (user, fileName) => {
    // video.insertAdjacentHTML(
    //   'beforebegin',
    //   `
    //   <h4>User ${user} uploaded: ${fileName} and invites you to upload the same file.</h4>
    // `
    // );

    if (!props.source) return;

    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  });

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
              onChange={volumeChangeHandler}
              type='range'
              step='0.05'
              min='0'
              max='1'
              ref={volRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
