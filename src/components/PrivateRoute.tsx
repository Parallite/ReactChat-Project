import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from 'src/store';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const isAuth = useSelector((state: RootState) => state.profile.isAuth);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return component ? component : <Outlet />;
};
