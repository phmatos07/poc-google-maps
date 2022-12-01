import { Component } from '@angular/core';

@Component({
  selector: 'pgm-google-maps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  toggleSidebar = false;

  openSidebar(isOpen: boolean): void {
    this.toggleSidebar = isOpen;
  }
}
