import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(auth(false));
  };

  const handleLogin = () => {
    navigate('/signin');
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
            <button onClick={handleLogin}>login</button>
          )}
          <Outlet />
        </div>
      </main>
    </>
  );
};
