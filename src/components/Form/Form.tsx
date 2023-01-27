import { FC, useEffect, useRef, useState } from 'react';
import { AUTHOR, Message } from 'src/types';
import style from './Form.module.scss';

interface FormProps {
  addNewMessage: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addNewMessage }) => {
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = {
      id: Math.random() * 1000,
      text: messageText,
      author: AUTHOR.USER,
    };
    addNewMessage(message);
    setMessageText('');
    setMessageAuthor('');
  };

  useEffect(() => {
    inputEl.current?.focus();
  }, [addNewMessage]);

  return (
    <>
      <div className={style.wrp}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            ref={inputEl}
            className={style.input}
            type="text"
            name="author"
            placeholder="author"
            value={messageAuthor}
            onChange={(e) => setMessageAuthor(e.target.value)}
          />
          <input
            className={style.input}
            type="text"
            name="message"
            placeholder="message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button
            className={style.btn}
            disabled={!messageText && !messageAuthor}
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
};
