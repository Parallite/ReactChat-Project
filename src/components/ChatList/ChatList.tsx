import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from 'src/store/messages/messagesSlice';
import { selectChats } from 'src/store/messages/selectors';
import { push, ref, remove, set } from 'firebase/database';
import { db } from 'src/services/firebase';
import { nanoid } from 'nanoid';

// const nanoid = customAlphabet('1234567890', 10);

export const ChatList: FC<any> = ({chats}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      set(ref(db, `chats/${value}`), {
        id: nanoid(),
        name: value
      })
      set(ref(db, `messages/${value}`), {
        id: nanoid(),
        name: value
      })
    }
    setValue('');
  };

  const handleDelete = (chatName: string) => {
    remove(ref(db, `chats/${chatName}`))
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button>create chat</button>
        </form>
        <ul>
          {chats.map((chat: any) => (
            <li key={chat.id}>
              <NavLink
                to={`/chats/${chat.name}`}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {chat.name}
              </NavLink>
              <button onClick={() => handleDelete(chat.name)}>
                Delete {chat.name} chat
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
