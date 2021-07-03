const MessagesList = (props) => {
  return (
    <ul id='messages'>
      {props.messages.map((content) => {
        return <li>{content}</li>;
      })}
    </ul>
  );
};

export default MessagesList;
