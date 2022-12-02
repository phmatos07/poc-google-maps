import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'demonstration',
    loadChildren: () => import('./demonstration/demonstration.module').then(m => m.DemonstrationModule)
  },
  {
    path: 'map-marker',
    loadChildren: () => import('./map-marker/map-marker.module').then(m => m.MapMarkerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
