import style from './MessageList.module.scss';

export const MessageList = ({ messageList }) => {
  return (
    <>
      <div className={style.chatWrp}>
        {messageList.map((message) => (
          <div className={style.chatMessage} key={message.id}>
            <p className={style.chatInfo}>author: {message.author}</p>
            <p className={style.chatText}>message: {message.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
