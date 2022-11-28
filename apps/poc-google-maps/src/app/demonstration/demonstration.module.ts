import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule as GoogleMapsModuleNative } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { DemonstrationRoutingModule } from './demonstration-routing.module';
import { DemonstrationComponent } from './demonstration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModuleNative,
    DemonstrationRoutingModule
  ],
  exports: [DemonstrationComponent],
  declarations: [DemonstrationComponent]
})
export class DemonstrationModule { }
