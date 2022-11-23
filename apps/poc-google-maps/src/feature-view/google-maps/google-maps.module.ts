import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule as GoogleMapsModuleNative } from '@angular/google-maps';
import { GoogleApi } from '../../api/google.api';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModuleNative,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [GoogleMapsComponent],
  declarations: [GoogleMapsComponent],
  providers: [GoogleApi]
})
export class GoogleMapsModule { }
