import classes from './Chat.module.css';

const Chat = () => {
  return (
    <div className={classes['chat-container']}>
      <ul id='messages'></ul>
      <form id='form' action=''>
        <input id='input' type='text' maxlength='50' autocomplete='off' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
