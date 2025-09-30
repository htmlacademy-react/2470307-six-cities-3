import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../constants.js';
import { PrivateRoute } from '../components/private-route/private-route.js';
import MainScreen from '../pages/main/main.js';
import OfferScreen from '../pages/offer/offer.js';
import LoginScreen from '../pages/login/login-screen.js';
import FavoriteScreen from '../pages/favorite/favorite-screen.js';
import NotFoundScreen from '../pages/not-found/not-found.js';

type AppScreenProps = {
  placesCount: number;
  authorizationStatus: AuthorizationStatus;
  replaceRoute: AppRoute;
}

function App(props: AppScreenProps): JSX.Element {
  const { placesCount, authorizationStatus, replaceRoute } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={ <MainScreen placesCount={ placesCount } /> }
          />
          <Route
            path={ AppRoute.Login }
            element={ <LoginScreen /> }
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                mustBeRender={ authorizationStatus === AuthorizationStatus.Auth }
                replaceRoute={ replaceRoute }
              >
                <FavoriteScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Offer }
            element={ <OfferScreen /> }
          />
          <Route
            path="*"
            element={ <NotFoundScreen /> }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
