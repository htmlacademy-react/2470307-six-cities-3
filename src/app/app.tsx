import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../constants.js';
import { PrivateRoute } from '../components/private-route/private-route.js';
import MainScreen from '../pages/main/main.js';
import OfferScreen from '../pages/offer/offer.js';
import LoginScreen from '../pages/login/login-screen.js';
import FavoriteScreen from '../pages/favorite/favorite-screen.js';
import NotFoundScreen from '../pages/not-found/not-found.js';
import { TypeOffer } from '../types/offer.js';

type AppScreenProps = {
  authorizationStatus: AuthorizationStatus;
  offers: TypeOffer[];
}

function App(props: AppScreenProps): JSX.Element {
  const { authorizationStatus, offers } = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={ <MainScreen offers={ offers } /> }
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
                <FavoriteScreen offers={ offers } />
              </PrivateRoute>
            }
          />
          <Route
            path={ AppRoute.Offer }
            element={ <OfferScreen offers={ offers } /> }
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
