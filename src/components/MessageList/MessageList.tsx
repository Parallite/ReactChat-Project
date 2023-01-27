import style from './MessageList.module.scss';
import { Messages } from 'src/types';
import { FC } from 'react';

interface MessageListProps {
  messageList: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => {
  return (
    <>
      <div className={style.chatWrp}>
        {messageList.map((message) => (
          <div className={style.chatMessage} key={message.id}>
            <p data-testid="message-test" className={style.chatInfo}>
              author: {message.author}
            </p>
            <p data-testid="message-test" className={style.chatText}>
              message: {message.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
