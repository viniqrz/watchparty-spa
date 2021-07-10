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

  useEffect(() => {
    videoRef.current.load();
  }, [props.source]);

  const playHandler = () => {
    if (!props.source) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else videoRef.current.pause();
  };

  const localData = {
    currentTime: videoRef.current.currentTime,
    isPlaying: !videoRef.current.paused,
  };

  socket.emit('change', localData, Date.now());

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

      const localData = {
        currentTime: videoRef.current.currentTime,
        isPlaying: !videoRef.current.paused,
      };

      socket.emit('change', localData, Date.now());
    }
  };

  const volumeChangeHandler = () => {
    videoRef.current.volume = volRef.current.value;
  };

  const timeUpdateHandler = () => {
    const progress = videoRef.current.currentTime / videoRef.current.duration;
    setFillWidth(progress * barRef.current.offsetWidth + 'px');
  };

  socket.on('change', (serverData, actionTime) => {
    if (!props.source) return;

    const now = Date.now();
    let latency = 0;

    if (serverData.isPlaying) {
      videoRef.current.play();
      setPlayerIcon('fas fa-pause');
      latency = (now - actionTime) / 10 ** 3;
    } else {
      videoRef.current.pause();
    }

    videoRef.current.currentTime = serverData.currentTime + latency;
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
            <i
              className={
                videoRef.current.paused ? 'fas fa-play' : 'fas fa-pause'
              }
            ></i>
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
