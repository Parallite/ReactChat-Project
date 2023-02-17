import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from 'src/store';

interface PublicRouteProps {
  component?: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
  const isAuth = useSelector((state: RootState) => state.profile.isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return component ? component : <Outlet />;
};
