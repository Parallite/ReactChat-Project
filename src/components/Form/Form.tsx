import { nanoid } from 'nanoid';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from 'src/store/messages/actions';
import { AUTHOR } from 'src/types';
import style from './Form.module.scss';
import { Wrapper } from './styled';

export const Form: FC = () => {
  const [messageText, setMessageText] = useState('');
  const [messageAuthor, setMessageAuthor] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const inputEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      dispatch(
        addMessage(chatId, {
          id: nanoid(),
          text: messageText,
          author: AUTHOR.USER,
        })
      );
    }
    setMessageText('');
    setMessageAuthor('');
  };

  useEffect(() => {
    inputEl.current?.focus();
  }, [addMessage]);

  return (
    <Wrapper>
      <div className={style.wrp}>
        <form className={style.form} onSubmit={handleSubmit}>
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
    </Wrapper>
  );
};
