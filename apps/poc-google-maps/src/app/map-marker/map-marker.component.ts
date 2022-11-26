import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMaps } from '../../models/google-maps';
import { GoogleMapsOptions } from '../../models/google-maps-options';
import { MarkerPositionsConst } from '../../models/marker-positions.const';
import { GoogleMapsService } from '../../services/google-maps.service';

@Component({
  selector: 'pgm-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent implements OnInit, GoogleMaps {

  apiLoaded?: Observable<boolean>;
  options?: GoogleMapsOptions;
  display?: google.maps.LatLngLiteral;
  markerPositions = MarkerPositionsConst;

  constructor(private service: GoogleMapsService) { }

  ngOnInit(): void {
    this.apiLoaded = this.service.jsonp();
    this.options = this.service.getOptions();
  }

  mapClick(event: google.maps.MapMouseEvent): void {

    console.group('INFORMAÇÕES DO MAPA.');
    console.info(`Latitude/Longitude: ${event.latLng.toJSON()}`);
    console.info('Eventos:', event);
    console.groupEnd();

    this.options.center = (event.latLng.toJSON());
  }

  mapMousemove(event: google.maps.MapMouseEvent): void {
    this.display = event.latLng.toJSON();
  }
}
