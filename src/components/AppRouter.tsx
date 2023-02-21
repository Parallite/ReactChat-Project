import { FC, useEffect, useState } from 'react';
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
import { SignUp } from 'src/pages/SignUp';
import { db, firebaseAuth, getChats } from 'src/services/firebase';
import { useDispatch } from 'react-redux';
import { auth } from 'src/store/profile/profileSlice';
import { onValue, ref } from 'firebase/database';

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

export const AppRouter: FC = () => {
  const [chats, setChats] = useState<any>([]);
  const [messages, setMessages] = useState<any>({});

  const dispatch = useDispatch();
  useEffect(() => {
    const authUnsucsribe = firebaseAuth.onAuthStateChanged((user) => {
      dispatch(auth(!!user));
    });

    const chatsUnsucsribe = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {};
        setChats([...Object.values(data)])
    });

    const messagesUnsucsribe = onValue(ref(db, 'messages'), (snapshot) => {
      const data = snapshot.val() || {};
      setMessages(data);
    })
    return () => {
      authUnsucsribe();
      chatsUnsucsribe();
      messagesUnsucsribe();
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Main />} />
        <Route
          path="profile"
          element={<PrivateRoute component={<Profile />} />}
        />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="signup" element={<PublicRoute component={<SignUp />} />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route index element={<ChatList chats={chats} messages={messages}/>} />
          <Route path=":chatId" element={<ChatPage chats={chats} messages={messages}/>} />
        </Route>
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route path="*" element={<div> 404 page </div>} />
    </Routes>
  )
}

