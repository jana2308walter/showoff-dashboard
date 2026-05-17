import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sod-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {}
