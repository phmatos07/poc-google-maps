import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
