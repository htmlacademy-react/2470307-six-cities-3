import { Link } from 'react-router-dom';
import { TypeOffer } from '../../types/offer.ts';
import { cardConfig, getOfferUrl } from '../../constants.ts';
import { CardType } from '../../types/card.ts';
import { BookmarkButton } from '../bookmark-button/bookmark-button.tsx';

type PlaceCardProps = {
  offer: TypeOffer;
  cardType: CardType;
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

function PlaceCard({ offer, cardType, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const { articleClass, imageWrapperClass, cardInfoClass, imageWidth, imageHeight } = cardConfig[cardType];

  return (
    <article className={`${articleClass} place-card`}
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
    >

      {offer.isPremium ? <PlaceCardIsPremium /> : ''}

      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={ getOfferUrl(offer.id) }>
          <img className="place-card__image" src={offer.previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            { ' ' }
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={offer.id}
            isFavorite={offer.isFavorite}
            buttonType="place-card"
          />
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
