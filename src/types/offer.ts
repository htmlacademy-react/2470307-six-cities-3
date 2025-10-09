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
