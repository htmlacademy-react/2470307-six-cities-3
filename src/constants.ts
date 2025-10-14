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

const REVIEW_RAITING_TITLES = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export {
  AppRoute,
  AuthorizationStatus,
  getOfferUrl,
  cardConfig,
  NEAR_PLACES_COUNT,
  REVIEW_RAITING_TITLES,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH
};
