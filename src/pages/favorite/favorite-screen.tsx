import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header.js';
import { Footer } from '../../components/footer/footer.js';
import { FavoritesList } from '../../components/favorites-list/favorites-list.js';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { selectFavoriteOffers } from '../../store/selectors.ts';

function FavoriteScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

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
            <FavoritesList favoriteOffers={favoriteOffers} cardType='favorites' />
          </section>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default FavoriteScreen;
