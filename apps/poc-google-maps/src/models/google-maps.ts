import { Observable } from 'rxjs';
import { GoogleMapsOptions } from './google-maps-options';

export interface GoogleMaps {
  apiLoaded?: Observable<boolean>;
  options?: GoogleMapsOptions;
  display?: google.maps.LatLngLiteral;
}