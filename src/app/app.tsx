import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { AppRoute } from '../constants.ts';
import { PrivateRoute } from '../components/private-route/private-route.tsx';
import MainScreen from '../pages/main/main.tsx';
import OfferScreen from '../pages/offer/offer.tsx';
import LoginScreen from '../pages/login/login-screen.tsx';
import FavoriteScreen from '../pages/favorite/favorite-screen.tsx';
import NotFoundScreen from '../pages/not-found/not-found.tsx';
import { useAppDispatch } from '../store/hooks/hooks.ts';
import { checkAuthAction, fetchOffersAction } from '../store/action/api-actions.ts';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

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
              <PrivateRoute>
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
