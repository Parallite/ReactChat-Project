import React, { FC, Suspense } from 'react';
import { Main } from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from './components/ChatList';
import { Header } from './components/Header';
import { About } from './pages/About';

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

export const App: FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatPage />} />
            </Route>
            <Route path="*" element={<div>404 page</div>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
