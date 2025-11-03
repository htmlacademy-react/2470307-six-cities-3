import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../constants.js';
import { PrivateRoute } from '../components/private-route/private-route.js';
import MainScreen from '../pages/main/main.tsx';
import OfferScreen from '../pages/offer/offer.tsx';
import LoginScreen from '../pages/login/login-screen.js';
import FavoriteScreen from '../pages/favorite/favorite-screen.js';
import NotFoundScreen from '../pages/not-found/not-found.js';

type AppScreenProps = {
  authorizationStatus: AuthorizationStatus;
}

function App({ authorizationStatus }: AppScreenProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={ <MainScreen /> }
          />
          <Route
            path={ AppRoute.Login }
            element={ <LoginScreen /> }
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                mustBeRender={ authorizationStatus === AuthorizationStatus.NoAuth }
                replaceRoute={ AppRoute.Login }
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
            path={ AppRoute.NotFound }
            element={ <NotFoundScreen /> }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
