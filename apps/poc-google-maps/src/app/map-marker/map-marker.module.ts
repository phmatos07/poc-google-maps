import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapMarkerRoutingModule } from './map-marker-routing.module';
import { MapMarkerComponent } from './map-marker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MapMarkerRoutingModule
  ],
  exports: [MapMarkerComponent],
  declarations: [MapMarkerComponent]
})
export class MapMarkerModule { }
