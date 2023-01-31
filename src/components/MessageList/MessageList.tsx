import style from './MessageList.module.scss';
import { Message } from 'src/types';
import { FC } from 'react';

interface MessageListProps {
  messageList: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messageList }) => {
  return (
    <>
      <ul className={style.chatWrp}>
        {messageList.map((message) => (
          <li className={style.chatMessage} key={message.id}>
            <p data-testid="message-test" className={style.chatInfo}>
              author: {message.author}
            </p>
            <p data-testid="message-test" className={style.chatText}>
              message: {message.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
