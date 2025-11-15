import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header.tsx';
import { PlaceCard } from '../../components/card/card.tsx';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { Footer } from '../../components/footer/footer.tsx';
import { TypeOffer } from '../../types/offer.ts';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.tsx';

function FavoriteScreen(): JSX.Element {
  const { favorites, isFavoritesLoading } = useAppSelector((state) => state.favorites);

  const favoritesByCity = favorites.reduce((acc: { [key: string]: TypeOffer[] }, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

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
        <Footer />
      </div>
    );
  }

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
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
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
      <Footer />
    </div>
  );
}

export default FavoriteScreen;
