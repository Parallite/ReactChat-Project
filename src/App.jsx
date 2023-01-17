import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import style from './App.module.scss';
import { AUTHOR } from './constants';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const addToMessageList = (newMessage) => {
    setMessageList((prevMessage) => [...prevMessage, newMessage]);
  };

  const botAnswer = {
    id: Math.random() * 1000,
    text: 'Hello from BOT',
    author: AUTHOR.bot,
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === AUTHOR.user
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
