import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header.tsx';
import { NearPlacesList } from '../../components/near-places-list/near-places-list.tsx';
import { reviews } from '../../mocks/reviews.ts';
import { ReviewList } from '../../components/review-list/review-list.tsx';
import { ReviewForm } from '../../components/review-form/review-form.tsx';
import { Map } from '../../components/map/map.tsx';
import NotFoundScreen from '../not-found/not-found.tsx';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { selectFilteredNearbyOffers, selectOfferById } from '../../store/selectors.ts';

function OfferScreen(): JSX.Element {
  const { id } = useParams();

  const currentOffer = useAppSelector((state) => selectOfferById(state, id));

  const filteredNearbyOffers = useAppSelector((state) => selectFilteredNearbyOffers(state, id));

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const mapPoints = [...filteredNearbyOffers, currentOffer];

  return(
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${currentOffer.rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type.charAt(0).toUpperCase() + currentOffer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              {reviews.length > 0 && (
                <>
                  <ReviewList reviews={reviews} />
                  <ReviewForm />
                </>
              )}

            </div>
          </div>
          {mapPoints.length > 0 && (
            <section className="offer__map map">
              <Map
                city={currentOffer}
                points={mapPoints}
                selectedOfferId={currentOffer.id}
              />
            </section>
          )}
        </section>
        <div className="container">
          {filteredNearbyOffers.length > 0 && (
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlacesList offers={filteredNearbyOffers} cardType='nearPlaces' />
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
