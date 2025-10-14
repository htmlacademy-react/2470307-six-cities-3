import { useState } from 'react';
import { TypeOffer } from '../../types/offer.tsx';
import { PlaceCard } from '../card/card.tsx';
import { CardType } from '../../types/card.ts';

type OffersListProps = {
  offers: TypeOffer[];
  cardType: CardType;
};

function OffersList({ offers, cardType }: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.length > 0 && offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}

export { OffersList };
