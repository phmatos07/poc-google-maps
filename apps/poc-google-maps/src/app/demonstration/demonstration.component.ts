import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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

  private subscriptionForm?: Subscription;

  constructor(
    private service: DemonstrationService,
    private googleMapsService: GoogleMapsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.apiLoaded = this.googleMapsService.jsonp();
    this.options = this.googleMapsService.getOptions();
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

  private createForm(): void {
    this.formMapsConfig = this.formBuilder.group({
      width: [GoogleMapsOptionsConst.width],
      height: [GoogleMapsOptionsConst.height],
      lat: [GoogleMapsOptionsConst.center.lat],
      lng: [GoogleMapsOptionsConst.center.lng],
      zoom: [GoogleMapsOptionsConst.zoom],
    });
    this.getFormData();
  }

  private getFormData(): void {
    if (this.formMapsConfig) {
      this.subscriptionForm = this.formMapsConfig.valueChanges
        .subscribe((fields: FormFields) => this.options = this.service.getMapsOptions(fields));
    }
  }

  private centerMap(center: { lat: number, lng: number }): void {
    if (this.formMapsConfig) {
      this.options = { ...this.options, center };
      this.formMapsConfig.patchValue({ lat: center.lat, lng: center.lng });
    }
  }
}
