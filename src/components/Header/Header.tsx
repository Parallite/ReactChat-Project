import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Header.module.scss';

const navigate = [
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
];

export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <ul className={style.links}>
          {navigate.map((item, idx) => (
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
          <Outlet />
        </div>
      </main>
    </>
  );
};
