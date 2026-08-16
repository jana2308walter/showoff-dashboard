import { Component, input } from '@angular/core';

@Component({
  selector: 'sod-site-title',
  templateUrl: './site-title.component.html'
})
export class SiteTitleComponent {
  readonly $title = input('', { alias: 'title' });
  readonly $subtitle = input('', { alias: 'subtitle' });
}
