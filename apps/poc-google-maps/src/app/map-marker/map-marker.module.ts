import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule as GoogleMapsModuleNative } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { InformationBoardModule } from '../../feature-view/information-board/information-board.module';
import { MapMarkerRoutingModule } from './map-marker-routing.module';
import { MapMarkerComponent } from './map-marker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModuleNative,
    MapMarkerRoutingModule,
    InformationBoardModule
  ],
  exports: [MapMarkerComponent],
  declarations: [MapMarkerComponent]
})
export class MapMarkerModule { }
