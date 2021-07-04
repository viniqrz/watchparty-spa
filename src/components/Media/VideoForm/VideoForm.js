import { useRef, useState, useContext } from 'react';
import classes from './VideoForm.module.css';
import { SocketContext } from './../../../contexts/SocketContext';

const VideoForm = (props) => {
  const socket = useContext(SocketContext);
  const inputRef = useRef('');
  const [bg, setBg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const file = inputRef.current.files[0];

    if (!file) return;

    props.onUpload(file);

    socket.emit('uploaded', socket.user, file.name);
    // video.insertAdjacentHTML(
    //   'beforebegin',
    //   `
    //   <h4>You uploaded: ${inputVideo.files[0].name}</h4>
    // `
    // );

    // video.load();
  };

  // useEffect(() => {

  // })

  // setTimeout(() => {
  //   const bgColor = `rgb(${Math.random() * 256},${Math.random() * 256},${
  //     Math.random() * 256
  //   })`;
  //   // setBg(bgColor);
  // }, 1000);

  return (
    <form className={classes['video-form']}>
      <input
        ref={inputRef}
        className='input-video'
        type='file'
        accept='video/*'
        required
      />
      <button onClick={submitHandler} className='submit' type='submit'>
        Special Button made by a Parrot
      </button>
    </form>
  );
};

export default VideoForm;
