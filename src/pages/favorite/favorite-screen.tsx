import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header.tsx';
import { PlaceCard } from '../../components/card/card.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { fetchFavoritesAction } from '../../store/action/api-actions.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { TypeOffer } from '../../types/offer.ts';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';

function FavoriteScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const { favorites, isFavoritesLoading } = useAppSelector((state) => state.favorites);

  if (isFavoritesLoading) {
    return <Spinner />;
  }

  if (favorites.length === 0) {
    return (
      <div className="page page--favorites-empty">
        <Helmet>
          <title>6 cities: favorites empty</title>
        </Helmet>
        <Header />
        <FavoritesEmpty />
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
  }

  const favoritesByCity = favorites.reduce((acc: { [key: string]: TypeOffer[] }, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([city, offers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} cardType="favorites" />)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoriteScreen;
