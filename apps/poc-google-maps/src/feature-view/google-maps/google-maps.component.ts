import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApi } from '../../api/google.api';
import { GoogleMapsOptions } from '../../models/google-maps-options';
import { GoogleMapsOptionsConst } from '../../models/google-maps-options.const';
import { KEY_API_GOOGLE_MAPS } from '../../models/valores-padroes.const';

@Component({
  selector: 'pgm-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  @Input()
  options?: GoogleMapsOptions;

  apiLoaded?: Observable<boolean>;
  _options?: GoogleMapsOptions;
  display?: google.maps.LatLngLiteral;

  constructor(private api: GoogleApi) { }

  ngOnInit(): void {
    this.apiLoaded = this.api.jsonp(KEY_API_GOOGLE_MAPS);
    this.setOptions(this.options);
  }

  moveMap(event: google.maps.MapMouseEvent): void {
    this._options.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent): void {
    this.display = event.latLng.toJSON();
  }

  private setOptions(googleMapsOptions?: GoogleMapsOptions): void {

    if (googleMapsOptions) {
      this._options = googleMapsOptions;
      return;
    }
    this._options = GoogleMapsOptionsConst;
  }
}
