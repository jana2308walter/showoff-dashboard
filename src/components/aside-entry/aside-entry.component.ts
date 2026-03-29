import { Component, Input } from '@angular/core';

@Component({
  selector: 'sod-aside-entry',
  templateUrl: './aside-entry.component.html',
  host: {
    class: 'aside-entry'
  }
})
export class AsideEntryComponent {
  @Input() iconName = '';
  @Input() label = 'Lorem Ipsum';
  @Input() filled = false;
}
