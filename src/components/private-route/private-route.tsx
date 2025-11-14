import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants.ts';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { Spinner } from '../spinner/spinner.tsx';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const { children } = props;

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export { PrivateRoute };
