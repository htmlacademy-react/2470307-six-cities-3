import { CardType } from '../../types/card.ts';
import { TypeOffer } from '../../types/offer.ts';
import { PlaceCard } from '../card/card.tsx';

type NearPlacesListProps = {
  offers: TypeOffer[];
  cardType: CardType;
};

function NearPlacesList({ offers, cardType }: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
        />
      ))}
    </div>
  );
}

export { NearPlacesList };
