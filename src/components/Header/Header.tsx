import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logOut } from 'src/services/firebase';
import { RootState } from 'src/store';
import { auth } from 'src/store/profile/profileSlice';
import style from './Header.module.scss';

const nav = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector((state: RootState) => state.profile.isAuth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut()
  };

  return (
    <>
      <header className={style.header}>
        <ul className={style.links}>
          {nav.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${style.activeLink}` : `${style.defaultLink}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main className={style.container}>
        <div className={style.contentWrp}>
          {isAuth ? (
            <button onClick={handleLogout}>logout</button>
          ) : (
            <>
              <button onClick={() => navigate('/signin')}>login</button>
              <button onClick={() => navigate('/signup')}>Sign Up</button>
            </>
          )}
          <Outlet />
        </div>
      </main>
    </>
  );
};
