import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HOST_AVATAR_DIMENSIONS, MAX_GALLERY_IMAGES } from '../../constants.ts';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header.tsx';
import { NearPlacesList } from '../../components/near-places-list/near-places-list.tsx';
import { ReviewList } from '../../components/review-list/review-list.tsx';
import { Map } from '../../components/map/map.tsx';
import NotFoundScreen from '../not-found/not-found.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/action/action.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { selectFilteredNearbyOffers, selectSortedReviews } from '../../store/selectors.ts';
import { BookmarkButton } from '../../components/bookmark-button/bookmark-button.tsx';
import { capitalize, getRatingWidth } from '../../utils/utils.ts';

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const sortedReviews = useAppSelector(selectSortedReviews);

  const { offer: currentOffer, isOfferLoading } = useAppSelector((state) => state.offerData);
  const nearbyOffers = useAppSelector((state) => selectFilteredNearbyOffers(state, id));
  const totalReviewsCount = useAppSelector((state) => state.offerReview.reviews.length);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  if (isOfferLoading) {
    return <Spinner />;
  }

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const mapPoints = [...nearbyOffers, currentOffer];

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
              {currentOffer.images.slice(0, MAX_GALLERY_IMAGES).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={currentOffer.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <BookmarkButton
                  offerId={currentOffer.id}
                  isFavorite={currentOffer.isFavorite}
                  buttonType="offer"
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingWidth(currentOffer.rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} {currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} {currentOffer.maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width={HOST_AVATAR_DIMENSIONS.width} height={HOST_AVATAR_DIMENSIONS.height} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{currentOffer.description}</p>
                </div>
              </div>
              <ReviewList reviews={sortedReviews} totalReviewsCount={totalReviewsCount} />

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
          {nearbyOffers.length > 0 && (
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearPlacesList offers={nearbyOffers} cardType='nearPlaces' />
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
