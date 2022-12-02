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
  markerPositions = MarkerPositionsConst;
  latLngCurrent?: google.maps.LatLngLiteral;
  latLngClicked?: google.maps.LatLngLiteral;

  constructor(private service: GoogleMapsService) { }

  ngOnInit(): void {
    this.apiLoaded = this.service.jsonp();
    this.options = this.service.getOptions();
  }

  mapClick(event: google.maps.MapMouseEvent): void {
    this.service.console(event);
    this.options = { ...this.options, center: (event.latLng.toJSON()) };
    this.markerPositions = this.service.setMarkerPosition(this.markerPositions, event.latLng.toJSON(), 'Teste');
    this.latLngClicked = event.latLng.toJSON();
  }

  mapMousemove(event: google.maps.MapMouseEvent): void {
    this.latLngCurrent = event.latLng.toJSON();
  }
}
