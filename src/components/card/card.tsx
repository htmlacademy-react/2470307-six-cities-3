import { Link } from 'react-router-dom';
import { TypeOffer } from '../../types/offer.ts';
import { getOfferUrl } from '../../constants.ts';

type PlaceCardProps = {
  offer: TypeOffer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function PlaceCardIsPremium(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({ offer, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card"
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
    >

      {offer.isPremium ? <PlaceCardIsPremium /> : ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ getOfferUrl(offer.id) }>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            `place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`
          }
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmark' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ getOfferUrl(offer.id) }>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
