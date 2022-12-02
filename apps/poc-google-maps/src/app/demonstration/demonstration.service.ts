import { Injectable } from '@angular/core';
import { FormFields } from '../../models/form-fields';
import { GoogleMapsOptions } from '../../models/google-maps-options';
import { MapTypeId } from './../../models/map-typeId.enum';

@Injectable()
export class DemonstrationService {

  getMapsOptions(field: FormFields): GoogleMapsOptions {

    return {
      width: field.width,
      height: field.height,
      center: { lat: Number(field.lat), lng: Number(field.lng) },
      zoom: field.zoom,
      mapTypeId: field.mapType
    };
  }

  getTypesMaps(): Array<{ label: string, value: string }> {
    return Object.keys(MapTypeId).map(_value => ({
      label: _value,
      value: _value.toLowerCase()
    }));
  }
}
