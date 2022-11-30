import { Injectable } from '@angular/core';
import { FormFields } from '../../models/form-fields';
import { GoogleMapsOptions } from '../../models/google-maps-options';

@Injectable()
export class DemonstrationService {

  getMapsOptions(field: FormFields): GoogleMapsOptions {

    return {
      width: field.width,
      height: field.height,
      center: { lat: Number(field.lat), lng: Number(field.lng) },
      zoom: field.zoom,
    };
  }
}
