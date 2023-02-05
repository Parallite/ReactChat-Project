import React, { FC, Suspense, useState } from 'react';
import { Main } from './pages/Main';
// import { Profile } from './pages/Profile';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList';
import { AUTHOR, Chat, Message, Messages } from './types';
// import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import { AboutWithConnect } from './pages/About';

//  не добавляется хэш файл
const Profile = React.lazy(() =>
  import('./pages/Profile').then(({ Profile }) => ({
    default: Profile,
  }))
);

const ChatPage = React.lazy(() =>
  import('./pages/ChatPage').then(({ ChatPage }) => ({
    default: ChatPage,
  }))
);

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'first chat',
  },
  {
    id: '2',
    name: 'second chat',
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
    setChats(chats.filter((chat) => chat.id !== chatId));
    const newMessages = { ...messageList };
    delete newMessages[chatId];

    setMessageList(newMessages);
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessageList({
      ...messageList,
      [chatId]: [...messageList[chatId], newMessage],
    });
  };

  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Main />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<AboutWithConnect />} />
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
              <Route path="*" element={<div>404 page</div>} />
            </Route>
          </Routes>
        </Suspense>
      </Provider>
    </>
  );
};
