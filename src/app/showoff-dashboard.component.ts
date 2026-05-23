import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { NavItem } from '../model/nav-item';

@Component({
  selector: 'sod-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {
  private readonly router = inject(Router);

  protected readonly $actualRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects)
    )
  );

  protected readonly navItems: NavItem[] = [
    {
      id: 1,
      link: '/coordinates',
      iconName: 'globe_location_pin',
      label: 'Koordinaten'
    },
    {
      id: 2,
      link: '/weather/current',
      iconName: 'timer',
      label: 'Aktuelles Wetter'
    },
    {
      id: 3,
      link: '/weather/hourly',
      iconName: 'nest_clock_farsight_analog',
      label: 'Stündliches Wetter'
    },
    {
      id: 4,
      link: '/weather/daily',
      iconName: 'calendar_month',
      label: 'Tägliches Wetter'
    }
  ];
}
