import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, removeChat } from 'src/store/messages/messagesSlice';
import { selectChats } from 'src/store/messages/selectors';

// const nanoid = customAlphabet('1234567890', 10);

export const ChatList: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const chats = useSelector(selectChats);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(addChat(value));
      setValue('');
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button>create chat</button>
        </form>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id}>
              <NavLink
                to={`/chats/${chat.name}`}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {chat.name}
              </NavLink>
              <button onClick={() => dispatch(removeChat(chat.name))}>
                Delete {chat.name} chat
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
