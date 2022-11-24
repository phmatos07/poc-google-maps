import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApi } from '../api/google.api';
import { GoogleMapsOptions } from '../models/google-maps-options';
import { GoogleMapsOptionsConst } from '../models/google-maps-options.const';
import { KEY_API_GOOGLE_MAPS } from '../models/valores-padroes.const';

@Injectable({ providedIn: 'root' })
export class GoogleMapsService {

  constructor(private api: GoogleApi) { }

  jsonp(key = KEY_API_GOOGLE_MAPS): Observable<boolean> {
    return this.api.jsonp(key);
  }

  getOptions(googleMapsOptions?: GoogleMapsOptions): GoogleMapsOptions {
    return googleMapsOptions ? googleMapsOptions : GoogleMapsOptionsConst;
  }
}
