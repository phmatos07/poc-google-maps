import { Component, Input } from '@angular/core';

@Component({
  selector: 'pgm-information-board',
  templateUrl: 'information-board.component.html',
  styleUrls: ['./information-board.component.scss']
})
export class InformationBoardComponent {

  @Input()
  latLngCurrent!: google.maps.LatLngLiteral;

  @Input()
  set latLngClicked(latLngClicked: google.maps.LatLngLiteral) {
    if (latLngClicked) {
      this.addLatLng(latLngClicked);
    }
  }

  readonly MINIMUM_AMOUNT = 1;
  positions?: google.maps.LatLngLiteral[];

  private addLatLng(latLngClicked: google.maps.LatLngLiteral): void {
    if (Array.isArray(this.positions)) {
      this.positions.push(latLngClicked);
      return;
    }
    this.positions = new Array(latLngClicked);
  }
}
