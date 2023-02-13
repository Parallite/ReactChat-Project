import { FC } from 'react';
import { Main } from 'src/pages/Main';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Header } from 'src/components/Header';
import { About } from 'src/pages/About';
import { Profile } from 'src/pages/Profile';
import { ChatPage } from 'src/pages/ChatPage';

// const Profile = React.lazy(() =>
//   import('./pages/Profile').then(({ Profile }) => ({
//     default: Profile,
//   }))
// );

// const ChatPage = React.lazy(() =>
//   import('./pages/ChatPage').then(({ ChatPage }) => ({
//     default: ChatPage,
//   }))
// );

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="about" element={<About />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
    </Route>
    <Route path="*" element={<div> 404 page </div>} />
  </Routes>
);
