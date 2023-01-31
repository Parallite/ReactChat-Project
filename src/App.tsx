import { FC, useState } from 'react';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList';
import { AUTHOR, Chat, Message, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  },
];

const defaultMessageList: Messages = {
  '1': [{ id: 1, author: AUTHOR.USER, text: 'hello chat 1' }],
  '2': [{ id: 2, author: AUTHOR.USER, text: 'hello chat 2' }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messageList, setMessageList] = useState<Messages>(defaultMessageList);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessageList({
      ...messageList,
      [newChat.id]: [],
    });
  };

  const onRemoveChat = (chatId: string) => {
    setChats([...chats.filter((chat) => chat.id !== chatId)]);
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessageList({
      ...messageList,
      [chatId]: [...messageList[chatId], newMessage],
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chats={chats}
                  onAddChat={onAddChat}
                  onRemoveChat={onRemoveChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <ChatPage
                  chats={chats}
                  onAddChat={onAddChat}
                  messageList={messageList}
                  onAddMessage={onAddMessage}
                  onRemoveChat={onRemoveChat}
                />
              }
            />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
};
