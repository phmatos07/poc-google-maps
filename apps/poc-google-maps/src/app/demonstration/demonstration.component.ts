import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DOES_NOT_SUPPORT_GEOLOCATION } from '../../models/error-messages.const';
import { FormFields } from '../../models/form-fields';
import { GoogleMapsOptions } from '../../models/google-maps-options';
import { MarkerPositionsConst } from '../../models/marker-positions.const';
import { GoogleMapsService } from '../../services/google-maps.service';
import { GoogleMapsOptionsConst } from './../../models/google-maps-options.const';
import { DemonstrationService } from './demonstration.service';

@Component({
  selector: 'pgm-demonstration',
  templateUrl: './demonstration.component.html',
  styleUrls: ['./demonstration.component.scss']
})
export class DemonstrationComponent implements OnInit, OnDestroy {

  apiLoaded?: Observable<boolean>;
  options?: GoogleMapsOptions;
  markerPositions = MarkerPositionsConst;
  formMapsConfig?: AbstractControl;
  typesMaps?: Array<{ label: string, value: string }>

  private subscriptionForm?: Subscription;

  constructor(
    private service: DemonstrationService,
    private googleMapsService: GoogleMapsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.apiLoaded = this.googleMapsService.jsonp();
    this.getCurrentPosition();
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptionForm) {
      this.subscriptionForm.unsubscribe();
    }
  }

  mapClick(event: google.maps.MapMouseEvent): void {
    this.googleMapsService.console(event);
    this.centerMap((event.latLng.toJSON()));
    this.markerPositions = this.googleMapsService.setMarkerPosition(this.markerPositions, event.latLng.toJSON(), 'Teste');
  }

  private getCurrentPosition(googleMapsOptions?: GoogleMapsOptions): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.options = {
          ...this.googleMapsService.getOptions(), center: {
            lat: position.coords.latitude, lng: position.coords.longitude
          }
        };
      });
    } else {
      console.group('GEOLOCATION');
      console.warn(DOES_NOT_SUPPORT_GEOLOCATION);
      console.groupEnd();
    }
  }

  private createForm(): void {
    this.formMapsConfig = this.formBuilder.group({
      width: [GoogleMapsOptionsConst.width],
      height: [GoogleMapsOptionsConst.height],
      lat: [GoogleMapsOptionsConst.center.lat],
      lng: [GoogleMapsOptionsConst.center.lng],
      zoom: [GoogleMapsOptionsConst.zoom],
      isCenter: [true],
      mapType: [GoogleMapsOptionsConst.mapTypeId]
    });
    this.typesMaps = this.service.getTypesMaps();
    this.getFormData();
  }

  private getFormData(): void {
    if (this.formMapsConfig) {
      this.subscriptionForm = this.formMapsConfig.valueChanges
        .subscribe((fields: FormFields) => {

          console.log(fields);

          this.options = this.service.getMapsOptions(fields)
        });
    }
  }

  private centerMap(center: { lat: number, lng: number }): void {

    const IS_CENTER = this.formMapsConfig?.get('isCenter')?.value;

    if (IS_CENTER && this.formMapsConfig) {
      this.options = { ...this.options, center };
      this.formMapsConfig.patchValue({ lat: center.lat, lng: center.lng });
    }
  }
}
