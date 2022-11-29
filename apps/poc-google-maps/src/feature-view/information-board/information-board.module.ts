import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InformationBoardComponent } from './information-board.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [InformationBoardComponent],
  declarations: [InformationBoardComponent]
})
export class InformationBoardModule { }
