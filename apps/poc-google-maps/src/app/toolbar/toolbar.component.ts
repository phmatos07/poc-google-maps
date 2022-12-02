import { Component, EventEmitter, Output } from '@angular/core';
import { APPLICATION_NAME } from '../../models/default-setting.const';

@Component({
  selector: 'pgm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output()
  openSidebarEmitter = new EventEmitter<boolean>();

  readonly APPLICATION_NAME = APPLICATION_NAME;
  private toggleSidebar = false;

  openSidebar(): void {
    this.toggleSidebar = !this.toggleSidebar;
    this.openSidebarEmitter.emit(this.toggleSidebar);
  }
}
