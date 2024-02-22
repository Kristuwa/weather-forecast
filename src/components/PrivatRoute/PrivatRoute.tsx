import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: ReactNode;
  redirectTo?: string;
  isLoggedIn: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  isLoggedIn,
  component,
  redirectTo = '/',
}) => {
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{component}</>;
};
