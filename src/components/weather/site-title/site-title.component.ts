import { Component, input } from '@angular/core';

@Component({
  selector: 'sod-site-title',
  templateUrl: './site-title.component.html'
})
export class SiteTitleComponent {
  $title = input('', { alias: 'title' });
  $subtitle = input('', { alias: 'subtitle' });
}
