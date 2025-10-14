enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const getOfferUrl = (id: string) => AppRoute.Offer.replace(':id', id);

const cardConfig = {
  cities: {
    articleClass: 'cities__card',
    imageWrapperClass: 'cities__image-wrapper',
    cardInfoClass: '',
    imageWidth: 260,
    imageHeight: 200,
  },
  favorites: {
    articleClass: 'favorites__card',
    imageWrapperClass: 'favorites__image-wrapper',
    cardInfoClass: 'favorites__card-info',
    imageWidth: 150,
    imageHeight: 110,
  },
  nearPlaces: {
    articleClass: 'near-places__card',
    imageWrapperClass: 'near-places__image-wrapper',
    cardInfoClass: '',
    imageWidth: 260,
    imageHeight: 200,
  }
};

const NEAR_PLACES_COUNT = 3;

export { AppRoute, AuthorizationStatus, getOfferUrl, cardConfig, NEAR_PLACES_COUNT };
