import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from './../../feature-view/google-maps/google-maps.module';
import { MapMarkerRoutingModule } from './map-marker-routing.module';
import { MapMarkerComponent } from './map-marker.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MapMarkerRoutingModule,
    GoogleMapsModule
  ],
  exports: [MapMarkerComponent],
  declarations: [MapMarkerComponent]
})
export class MapMarkerModule { }
