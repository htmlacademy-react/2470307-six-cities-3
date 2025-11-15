import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants.ts';
import { useAppSelector } from '../../store/hooks/hooks.ts';

type PublicRouteProps = {
  children: JSX.Element;
};

function PublicRoute({ children }: PublicRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? <Navigate to={AppRoute.Main} />
    : children;
}

export { PublicRoute };
