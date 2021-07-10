import { useRef, useState, useContext } from 'react';
import classes from './VideoForm.module.css';
import { SocketContext } from './../../../contexts/SocketContext';
import { UserContext } from './../../../contexts/UserContext';

const VideoForm = (props) => {
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const inputRef = useRef('');
  const btnRef = useRef('');
  const [source, setSource] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const file = inputRef.current.files[0];

    if (!file) return;

    props.onUpload(file);

    socket.emit('uploaded', socket.user, file.name);

    setSource(file.name);
    // video.insertAdjacentHTML(
    //   'beforebegin',
    //   `
    //   <h4>You uploaded: ${inputVideo.files[0].name}</h4>
    // `
    // );

    // video.load();
  };

  setInterval(() => {
    const bgColor = `rgb(${Math.random() * 256},${Math.random() * 256},${
      Math.random() * 256
    })`;
    if (!btnRef.current) return;

    btnRef.current.style.backgroundColor = bgColor;
  }, 1000);

  return (
    <div>
      {source && (
        <div className={classes['info-container']}>
          <div>
            <img src={auth.user.photo} alt='avatar' />
            <h2>
              {auth.user.name} uploaded {source}
            </h2>
          </div>
          {/* <div>
            <img src={auth.user.photo} alt='avatar' />
            <h2>
              {auth.user.name} uploaded {source}
            </h2>
          </div>
          <div>
            <img src={auth.user.photo} alt='avatar' />
            <h2>
              {auth.user.name} uploaded {source}
            </h2>
          </div>  */}
        </div>
      )}
      <form className={classes['video-form']}>
        <input
          ref={inputRef}
          className='input-video'
          type='file'
          accept='video/*'
          required
        />
        <button
          ref={btnRef}
          onClick={submitHandler}
          className='submit'
          type='submit'
        >
          Special Button made by a Parrot
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
