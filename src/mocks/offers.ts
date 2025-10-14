import { TypeOffer } from '../types/offer.ts';

export const offers: TypeOffer[] = [
  {
    'id': 'babb3600-34a0-4f8c-8273-54418245f424',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 182,
    'previewImage': 'img/apartment-01.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '1e00df47-f417-426d-97b0-d4f4d7cf6162',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 405,
    'previewImage': 'img/apartment-02.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': '4acba091-1577-43c8-a83f-0e48f369e9de',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 243,
    'previewImage': 'img/apartment-03.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '3d59b472-4fde-4d6b-98b5-31586040fd02',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 404,
    'previewImage': 'img/room.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1.6
  }
];
