import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GoogleMapsOptionsConst } from './../../models/google-maps-options.const';

@Component({
  selector: 'pgm-demonstration',
  templateUrl: './demonstration.component.html',
  styleUrls: ['./demonstration.component.scss']
})
export class DemonstrationComponent implements OnInit, OnDestroy {

  formMapsConfig?: AbstractControl;
  private subscriptionForm?: Subscription;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptionForm) {
      this.subscriptionForm.unsubscribe();
    }
  }

  private createForm(): void {
    this.formMapsConfig = this.formBuilder.group({
      width: [GoogleMapsOptionsConst.width],
      height: [GoogleMapsOptionsConst.height],
      lat: [GoogleMapsOptionsConst.center.lat],
      lng: [GoogleMapsOptionsConst.center.lng],
      zoom: [GoogleMapsOptionsConst.zoom],
    });
    this.subscriptionForm = this.getFormData();
  }

  private getFormData(): Subscription {
    return this.formMapsConfig.valueChanges
      .subscribe(value => console.log(value));
  }
}
