import { useRef, useState, useEffect, useContext } from 'react';

import { SocketContext } from './../../../contexts/SocketContext';

import classes from './Player.module.css';

const Player = (props) => {
  const socket = useContext(SocketContext);

  const videoRef = useRef('');
  const videoContainerRef = useRef('');
  const barRef = useRef('');
  const volRef = useRef(1);

  const [fillWidth, setFillWidth] = useState();
  const [volState, setVolState] = useState(1);

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
    if (!props.source) return;

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
    setVolState(volRef.current.value);
  };

  const timeUpdateHandler = () => {
    if (!props.source) return;

    const progress = videoRef.current.currentTime / videoRef.current.duration;
    setFillWidth(progress * barRef.current.offsetWidth + 'px');
  };

  socket.on('change', (serverData, actionTime) => {
    if (!props.source) return;

    const now = Date.now();
    let latency = 0;

    if (serverData.isPlaying) {
      videoRef.current.play();
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

  const muteHandler = () => {
    if (volRef.current.value === '0') {
      volRef.current.value = 1;
      setVolState(volRef.current.value);
    } else {
      volRef.current.value = 0;
      setVolState(volRef.current.value);
    }
  };

  const fullscreenHandler = () => {
    // if (!props.source) return;

    // const video = videoRef.current;
    // if (video.requestFullscreen) {
    //   video.requestFullscreen();
    // }

    if (!videoContainerRef.current) return;

    if (videoContainerRef.current.style.width !== '85%') {
      videoContainerRef.current.style.width = 85 + '%';
    } else {
      videoContainerRef.current.style.width = 70 + '%';
    }
  };

  return (
    <div ref={videoContainerRef} className={classes['player-container']}>
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
          <button onClick={playHandler} className={classes['btn-play']}>
            <i
              className={
                videoRef.current.paused ? 'fas fa-play' : 'fas fa-pause'
              }
            ></i>
          </button>
          <div className={classes['player-controls-right']}>
            <div className={classes['control-volume']}>
              <span className={classes['volume-button']}>
                <i
                  onClick={muteHandler}
                  className={
                    volState !== '0'
                      ? 'fas fa-volume-down'
                      : 'fas fa-volume-mute'
                  }
                ></i>
              </span>
              <input
                onChange={volumeChangeHandler}
                type='range'
                step='0.05'
                min='0'
                max='1'
                ref={volRef}
              />
            </div>
            <button onClick={fullscreenHandler}>
              <i class='fas fa-expand'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
