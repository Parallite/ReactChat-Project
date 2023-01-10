import { useState } from 'react';
import style from './Form.module.scss';

export const Form = ({ addNewMessage }) => {
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      id: Math.random() * 1000,
      text: messageText,
      author: messageAuthor,
    };
    addNewMessage(message);
  };

  return (
    <>
      <div className={style.wrp}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.input}
            type="text"
            name="author"
            placeholder="author"
            onChange={(e) => setMessageAuthor(e.target.value)}
          />
          <input
            className={style.input}
            type="text"
            name="message"
            placeholder="message"
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button className={style.btn}>Send message</button>
        </form>
      </div>
    </>
  );
};
