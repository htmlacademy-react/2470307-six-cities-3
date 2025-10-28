import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import { useMap } from './useMap.ts';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, ICON_SIZE, AnchorLocation } from '../../constants.ts';
import { TypeOffer } from '../../types/offer.ts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: TypeOffer;
  points: TypeOffer[];
  selectedOfferId: string | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [AnchorLocation.Horizontal, AnchorLocation.Vertical],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [AnchorLocation.Horizontal, AnchorLocation.Vertical],
});


function Map({ city, points, selectedOfferId }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(
          selectedOfferId !== null && point.id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedOfferId]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} />
  );
}

export { Map };
