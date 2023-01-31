import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AUTHOR, Message } from 'src/types';
import style from './Form.module.scss';

interface FormProps {
  addNewMessage: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addNewMessage }) => {
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');
  const { chatId } = useParams();

  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      addNewMessage(chatId, {
        id: Math.random() * 1000,
        text: messageText,
        author: AUTHOR.USER,
      });
    }
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
