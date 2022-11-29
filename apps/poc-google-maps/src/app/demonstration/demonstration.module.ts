import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule as GoogleMapsModuleNative } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DemonstrationRoutingModule } from './demonstration-routing.module';
import { DemonstrationComponent } from './demonstration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    GoogleMapsModuleNative,
    DemonstrationRoutingModule,
  ],
  exports: [DemonstrationComponent],
  declarations: [DemonstrationComponent]
})
export class DemonstrationModule { }
