import style from './MessageList.module.scss';

export const MessageList = ({ messageList }) => {
  return (
    <>
      <div className={style.chatWrp}>
        {messageList.map((message) => (
          <div className={style.chatMessage} key={message.id}>
            <p data-testid="message-test" className={style.chatInfo}>author: {message.author}</p>
            <p data-testid="message-test" className={style.chatText}>message: {message.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
