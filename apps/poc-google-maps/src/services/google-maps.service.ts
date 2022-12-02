import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApi } from '../api/google.api';
import { DEFAULT_ICON, KEY_API_GOOGLE_MAPS, LABEL_ORIGIN } from '../models/default-setting.const';
import { GoogleMapsOptions } from '../models/google-maps-options';
import { GoogleMapsOptionsConst } from '../models/google-maps-options.const';
import { MarkerOptionsBuilder } from '../models/marker-options.builder';
import { MarkerOptionsConst } from '../models/marker-options.const';
import { MarkerPositions } from '../models/marker-positions';
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

  console(event: google.maps.MapMouseEvent): void {
    console.group('INFORMAÇÕES DO MAPA.');
    console.log('Latitude/Longitude:', event.latLng.toJSON());
    console.log('Eventos:',  event);
    console.groupEnd();
  }

  setMarkerPosition(markers: MarkerPositions[], latLng: google.maps.LatLngLiteral, label: string): MarkerPositions[] {
    const index = markers.findIndex(marker => marker.lat === latLng.lat && marker.lng === latLng.lng);
    return index >= 0 ? this.setMarkerOptions(index, markers, latLng, label) : this.addMarkerPosition(markers, latLng, label);
  }

  private setMarkerOptions(index: number, markers: MarkerPositions[], latLng: google.maps.LatLngLiteral, label: string): MarkerPositions[] {
    return markers.map((marker, _index) => (
      _index === index ? {
        ...marker,
        label: new MarkerLabelBuilder(label).markerLabel,
        title: label,
        options: new MarkerOptionsBuilder(marker.options).setIcon(this.getIcon()).markerOptions
      } : marker
    ));
  }

  private addMarkerPosition(markers: MarkerPositions[], latLng: google.maps.LatLngLiteral, label: string): MarkerPositions[] {
    markers.push({
      lat: latLng.lat,
      lng: latLng.lng,
      label: new MarkerLabelBuilder(label).markerLabel,
      title: label,
      options: new MarkerOptionsBuilder(MarkerOptionsConst).setIcon(this.getIcon()).markerOptions
    });
    return markers;
  }

  private getIcon(url?: string): google.maps.Icon {
    return {
      labelOrigin: LABEL_ORIGIN,
      url: url || DEFAULT_ICON,
    };
  }
}
