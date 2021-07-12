import { useRef, useState, useContext } from 'react';
import classes from './VideoForm.module.css';
import { SocketContext } from './../../../contexts/SocketContext';
import { UserContext } from './../../../contexts/UserContext';

const VideoForm = (props) => {
  const socket = useContext(SocketContext);
  const auth = useContext(UserContext);
  const inputRef = useRef('');
  const btnRef = useRef('');
  const [source, setSource] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const file = inputRef.current.files[0];

    if (!file) return;

    props.onUpload(file);

    socket.emit('uploaded', auth.user, file.name);

    setSource([...source, { user: auth.user, fileName: file.name }]);
    // video.insertAdjacentHTML(
    //   'beforebegin',
    //   `
    //   <h4>You uploaded: ${inputVideo.files[0].name}</h4>
    // `
    // );

    // video.load();
  };

  socket.on('uploaded', (user, fileName) => {
    setSource([...source, { user, fileName }]);
  });

  setInterval(() => {
    const bgColor = `rgb(${Math.random() * 256},${Math.random() * 256},${
      Math.random() * 256
    })`;
    if (!btnRef.current) return;

    btnRef.current.style.backgroundColor = bgColor;
  }, 1000);

  return (
    <div>
      {source.length >= 1 && (
        <div className={classes['info-container']}>
          {source.map((el) => {
            return (
              <div key={Math.random()}>
                <img src={el.user.photo} alt='avatar' />
                <h2>
                  {el.user.name} uploaded {el.fileName}
                </h2>
              </div>
            );
          })}
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
          <img
            src='https://media4.giphy.com/media/VJScpfdeSNwuPdCL0W/200w.gif'
            alt='colored parrot'
            width='20'
          />
          Special Button made by a Parrot
        </button>
      </form>
    </div>
  );
};

export default VideoForm;
