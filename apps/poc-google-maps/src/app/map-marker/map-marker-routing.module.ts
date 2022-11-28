import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapMarkerComponent } from './map-marker.component';

const routes: Routes = [
  {
    path: '',
    component: MapMarkerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MapMarkerRoutingModule { }
