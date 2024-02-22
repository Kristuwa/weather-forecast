import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
  component: ReactNode;
  redirectTo?: string;
  isLoggedIn: boolean;
}

export const RestrictedRoute: FC<RestrictedRouteProps> = ({
  isLoggedIn,
  component,
  redirectTo = '/',
}) => {
  return isLoggedIn ? <Navigate to={redirectTo} /> : <>{component}</>;
};
