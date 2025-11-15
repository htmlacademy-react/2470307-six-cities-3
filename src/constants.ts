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

const CARDCONFIG = {
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

const INITIAL_RATING = 0;

const REVIEW_STAR_DIMENSIONS = {
  width: 37,
  height: 33,
};

const REVIEW_AVATAR_DIMENSIONS = {
  width: 54,
  height: 54,
};

const RATING_MULTIPLIER = 20;

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
};

const DATE_SUBSTRING_INDEX = {
  start: 0,
  end: 10,
};

const SORTING_ARROW_DIMENSIONS = {
  width: 7,
  height: 4,
};

const TAB_INDEX = 0;

const HOST_AVATAR_DIMENSIONS = {
  width: 74,
  height: 74,
};

const MAX_GALLERY_IMAGES = 6;

const PASSWORD_VALIDATION_PATTERN = '(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;
const MAX_REVIEWS_COUNT = 10;

const URL_MARKER_DEFAULT = '/img/pin.svg';

const URL_MARKER_CURRENT = '/img/pin-active.svg';

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

const BUTTON_CONFIG = {
  'place-card': {
    className: 'place-card__bookmark-button',
    width: 18,
    height: 19,
  },
  'offer': {
    className: 'offer__bookmark-button',
    width: 31,
    height: 33,
  },
};

const LOGO_DIMENSIONS = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

const AVATAR_DIMENSIONS = {
  width: 20,
  height: 20,
};

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';


export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
  getOfferUrl,
  CARDCONFIG,
  NEAR_PLACES_COUNT,
  REVIEW_RAITING_TITLES,
  INITIAL_RATING,
  REVIEW_STAR_DIMENSIONS,
  REVIEW_AVATAR_DIMENSIONS,
  RATING_MULTIPLIER,
  DATE_FORMAT_OPTIONS,
  DATE_SUBSTRING_INDEX,
  SORTING_ARROW_DIMENSIONS,
  TAB_INDEX,
  HOST_AVATAR_DIMENSIONS,
  MAX_GALLERY_IMAGES,
  PASSWORD_VALIDATION_PATTERN,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  MAX_REVIEWS_COUNT,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  DEFAULT_ZOOM_MAP_MAIN_PAGE,
  TITLE_LAYER_MAP,
  ATTRIBUTION_TITLE_LAYER_MAP,
  ICON_SIZE,
  AnchorLocation,
  CITIES,
  SortType,
  BUTTON_CONFIG,
  AUTH_TOKEN_KEY_NAME,
  LOGO_DIMENSIONS,
  AVATAR_DIMENSIONS
};
