import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Header } from '../../components/header/header.tsx';
import { OffersList } from '../../components/offers-list/offers-list.tsx';
import { Map } from '../../components/map/map.tsx';
import { CitiesList } from '../../components/cities-list/cities-list.tsx';
import { SortOptions } from '../../components/sort-options/sort-options.tsx';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { changeCity } from '../../store/action/sort-action.ts';
import { selectCurrentOffers, selectOffersLoadingStatus, selectSortedOffers } from '../../store/selectors.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleOfferHover = (id: string | null) => {
    setActiveOfferId(id);
  };

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  const currentCity = useAppSelector((state) => state.process.city);
  const currentOffers = useAppSelector(selectSortedOffers);
  const mapOffers = useAppSelector(selectCurrentOffers);
  const isOffersLoading = useAppSelector(selectOffersLoadingStatus);

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} onCityChange={handleCityChange} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <SortOptions />
              <OffersList offers={currentOffers} onOfferHover={handleOfferHover} cardType='cities' />
            </section>
            <div className="cities__right-section">
              {mapOffers.length > 0 && (
                <section className="cities__map map">
                  <Map city={mapOffers[0]} points={mapOffers} selectedOfferId={activeOfferId} />
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
