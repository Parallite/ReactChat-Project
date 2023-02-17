import { FC } from 'react';
import { Main } from 'src/pages/Main';
import { Routes, Route } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Header } from 'src/components/Header';
import { About } from 'src/pages/About';
import { Profile } from 'src/pages/Profile';
import { ChatPage } from 'src/pages/ChatPage';
import { Articles } from 'src/pages/Articles';
import { SignIn } from 'src/pages/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
      <Route
        path="profile"
        element={<PrivateRoute component={<Profile />} />}
      />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
      <Route path="chats" element={<PrivateRoute />}>
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
      <Route path="articles" element={<Articles />} />
    </Route>
    <Route path="*" element={<div> 404 page </div>} />
  </Routes>
);
