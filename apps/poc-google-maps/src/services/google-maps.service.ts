import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApi } from '../api/google.api';
import { GoogleMapsOptions } from '../models/google-maps-options';
import { GoogleMapsOptionsConst } from '../models/google-maps-options.const';
import { MarkerOptionsBuilder } from '../models/marker-options.builder';
import { MarkerPositions } from '../models/marker-positions';
import { DEFAULT_ICON, KEY_API_GOOGLE_MAPS, LABEL_ORIGIN } from '../models/valores-padroes.const';
import { MarkerLabelBuilder } from './../models/marker-label.builder';

@Injectable({ providedIn: 'root' })
export class GoogleMapsService {

  constructor(private api: GoogleApi) { }

  jsonp(key = KEY_API_GOOGLE_MAPS): Observable<boolean> {
    return this.api.jsonp(key);
  }

  getOptions(googleMapsOptions?: GoogleMapsOptions): GoogleMapsOptions {
    return googleMapsOptions ? googleMapsOptions : GoogleMapsOptionsConst;
  }

  setMarkerOptions(markers: MarkerPositions[], latLng: google.maps.LatLngLiteral, label: string): MarkerPositions[] {
    return markers.map(marker => (
      marker.lat === latLng.lat && marker.lng === latLng.lng ? {
        ...marker,
        label: new MarkerLabelBuilder(label).markerLabel,
        title: label,
        options: new MarkerOptionsBuilder(marker.options).setIcon(this.getIcon()).markerOptions
      } : marker
    ));
  }

  console(event: google.maps.MapMouseEvent): void {
    console.group('INFORMAÇÕES DO MAPA.');
    console.info('Latitude/Longitude:', event.latLng.toJSON());
    console.info('Eventos:', event);
    console.groupEnd();
  }

  private getIcon(url?: string): google.maps.Icon {
    return {
      labelOrigin: LABEL_ORIGIN,
      url: url || DEFAULT_ICON,
    };
  }
}
