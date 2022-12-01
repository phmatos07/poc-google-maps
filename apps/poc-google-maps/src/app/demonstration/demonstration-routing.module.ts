import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemonstrationComponent } from './demonstration.component';

const routes: Routes = [
  {
    path: '',
    component: DemonstrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DemonstrationRoutingModule { }
