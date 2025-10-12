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

export { AppRoute, AuthorizationStatus, getOfferUrl };
