import { useState } from 'react';
import { TypeOffer } from '../../types/offer.tsx';
import { PlaceCard } from '../card/card.tsx';
import { CardType } from '../../types/card.ts';

type OffersListProps = {
  offers: TypeOffer[];
  cardType: CardType;
  onOfferHover: (offerId: string | null) => void;
};

function OffersList({ offers, cardType, onOfferHover }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  const handleOfferHover = (offerId: string | null) => {
    setActiveOfferId(offerId);
    onOfferHover(offerId);
  };
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.length > 0 && offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={() => handleOfferHover(offer.id)}
          onMouseLeave={() => handleOfferHover(null)}
        />
      ))}
    </div>
  );
}

export { OffersList };
