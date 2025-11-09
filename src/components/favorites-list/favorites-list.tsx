import { Link } from 'react-router-dom';
import { TypeOffer } from '../../types/offer.ts';
import { CardType } from '../../types/card.ts';
import { PlaceCard } from '../card/card.tsx';

type FavoritesListProps = {
  favoriteOffers: TypeOffer[];
  cardType: CardType;
}

function groupOffersByCity(offers: TypeOffer[]): Map<string, TypeOffer[]> {
  const groupedOffers = new Map<string, TypeOffer[]>();

  if (offers && offers.length > 0) {
    offers.forEach((offer) => {

      const city = offer.city.name;
      if (!groupedOffers.has(city)) {
        groupedOffers.set(city, []);
      }
      groupedOffers.get(city)?.push(offer);
    });

  }
  return groupedOffers;
}

function FavoritesList({ favoriteOffers, cardType }: FavoritesListProps): JSX.Element {
  const groupedOffers = groupOffersByCity(favoriteOffers);

  return (
    <ul className="favorites__list">
      {Array.from(groupedOffers.entries()).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                cardType={cardType}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoritesList };
