import { FC, useEffect, useState } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHOR, Message, Messages } from './types';
import style from './App.module.scss';

export const App: FC = () => {
  const [messageList, setMessageList] = useState<Messages>([]);

  const addToMessageList = (newMessage: Message) => {
    setMessageList((prevMessage) => [...prevMessage, newMessage]);
  };

  const botAnswer = {
    id: Math.random() * 1000,
    text: 'Hello from BOT',
    author: AUTHOR.BOT,
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === AUTHOR.USER
    ) {
      const timer = setTimeout(() => {
        addToMessageList(botAnswer);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messageList]);

  return (
    <>
      <div className={style.container}>
        <Form addNewMessage={addToMessageList} />
        <MessageList messageList={messageList} />
      </div>
    </>
  );
};
