export type TypeLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TypeOfferCity = {
  name: string;
  location: TypeLocation;
};

export type TypeOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TypeOfferCity;
  location: TypeLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TypeHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TypeFullOffer = TypeOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TypeHost;
  images: string[];
  maxAdults: number;
};
