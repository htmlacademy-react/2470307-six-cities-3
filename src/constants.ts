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

enum APIRoute {
  Offers = '/offers',
  Nearby = '/nearby',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

enum AnchorLocation {
  Horizontal = 20,
  Vertical = 40
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
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

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const DEFAULT_ZOOM_MAP_MAIN_PAGE = 12;

const TITLE_LAYER_MAP = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const ATTRIBUTION_TITLE_LAYER_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const ICON_SIZE = 40;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
  getOfferUrl,
  cardConfig,
  NEAR_PLACES_COUNT,
  REVIEW_RAITING_TITLES,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  DEFAULT_ZOOM_MAP_MAIN_PAGE,
  TITLE_LAYER_MAP,
  ATTRIBUTION_TITLE_LAYER_MAP,
  ICON_SIZE,
  AnchorLocation,
  CITIES,
  SortType
};
