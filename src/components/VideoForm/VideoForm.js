import { useRef } from 'react';
import classes from './VideoForm.module.css';

const VideoForm = (props) => {
  const inputRef = useRef('');

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
