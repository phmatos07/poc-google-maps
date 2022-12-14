import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule as GoogleMapsModuleNative } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { DemonstrationRoutingModule } from './demonstration-routing.module';
import { DemonstrationComponent } from './demonstration.component';
import { DemonstrationService } from './demonstration.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    GoogleMapsModuleNative,
    DemonstrationRoutingModule
  ],
  exports: [DemonstrationComponent],
  declarations: [DemonstrationComponent],
  providers: [DemonstrationService]
})
export class DemonstrationModule { }
