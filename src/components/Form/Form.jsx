import { useState } from "react";
import { AUTHOR } from "src/constants";
import style from "./Form.module.scss";

export const Form = ({ addNewMessage }) => {
  const [messageText, setMessageText] = useState("");
  const [messageAuthor, setMessageAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      id: Math.random() * 1000,
      text: messageText,
      author: AUTHOR.user,
    };
    addNewMessage(message);
    setMessageText("");
    setMessageAuthor("");
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
