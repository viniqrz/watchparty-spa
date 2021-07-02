import { useRef, useState } from 'react';
import classes from './VideoForm.module.css';

const VideoForm = (props) => {
  const inputRef = useRef('');
  const [bg, setBg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const file = inputRef.current.files[0];

    if (!file) return;

    props.onUpload(file);

    // video.insertAdjacentHTML(
    //   'beforebegin',
    //   `
    //   <h4>You uploaded: ${inputVideo.files[0].name}</h4>
    // `
    // );

    // socket.emit('uploaded', myId, file.name);

    // video.load();
  };

  // useEffect(() => {

  // })

  setTimeout(() => {
    const bgColor = `rgb(${Math.random() * 256},${Math.random() * 256},${
      Math.random() * 256
    })`;
    setBg(bgColor);
  }, 20000);

  return (
    <form className={classes['video-form']}>
      <input
        ref={inputRef}
        className='input-video'
        type='file'
        accept='video/*'
        required
      />
      <button
        style={{ backgroundColor: bg }}
        onClick={submitHandler}
        className='submit'
        type='submit'
      >
        Special Button made by a Parrot
      </button>
    </form>
  );
};

export default VideoForm;
