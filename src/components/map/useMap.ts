import { MutableRefObject, useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import { TypeOffer } from '../../types/offer';
import { ATTRIBUTION_TITLE_LAYER_MAP, DEFAULT_ZOOM_MAP_MAIN_PAGE, TITLE_LAYER_MAP } from '../../constants.ts';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: TypeOffer
): leaflet.Map | null {
  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: DEFAULT_ZOOM_MAP_MAIN_PAGE,
      });

      leaflet
        .tileLayer(
          TITLE_LAYER_MAP,
          {
            attribution: ATTRIBUTION_TITLE_LAYER_MAP,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export { useMap };
