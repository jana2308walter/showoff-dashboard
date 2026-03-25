import { Component } from '@angular/core';

@Component({
  selector: 'sod-root',
  imports: [],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {
  protected sidebarItems = Array.from({ length: 7 }, (_, i) => i);
}
