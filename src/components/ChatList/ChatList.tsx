import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { nanoid } from 'nanoid';
import { Chat } from 'src/types';

// const nanoid = customAlphabet('1234567890', 10);

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onRemoveChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  onRemoveChat,
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: String(Math.random() * 10000),
        name: value,
      });
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
                to={`/chats/${chat.id}`}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {chat.name}
              </NavLink>
              <button onClick={() => onRemoveChat(chat.id)}>
                Delete cthis chat
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
