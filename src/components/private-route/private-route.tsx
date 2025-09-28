import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  mustBeRender: boolean;
  children: JSX.Element;
  replaceRoute: string;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { mustBeRender, children, replaceRoute } = props;
  return (
    mustBeRender
      ? children
      : <Navigate to={ replaceRoute } />
  );
}

export { PrivateRoute };
