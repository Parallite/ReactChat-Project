import { useEffect, useState } from "react";
import { Form } from './components/Form/Form'
import { MessageList } from './components/MessageList/MessageList'
import style from './App.module.scss'

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const addToMessageList = (newMessage)  => {
    setMessageList((prevMessage)=> [...prevMessage, newMessage])
  }

  const botAnswer = {
    id: Math.random() * 1000,
    text: 'Hello',
    author: 'BOT'
  }

  useEffect(()=> {
    if(messageList.length > 0 && messageList[messageList.length - 1].author !== 'BOT') {
      const timer = setTimeout(()=> {
        addToMessageList(botAnswer)
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [messageList])

  return <>
    <div className={style.container}>
      <Form addNewMessage={addToMessageList}/>
      <MessageList messageList={messageList}/>
    </div>
  </>
};
