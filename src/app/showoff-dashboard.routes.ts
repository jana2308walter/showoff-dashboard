import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./showoff-dashboard.component').then((m) => m.ShowoffDashboardComponent)
  }
  /*{
    path: 'coordinates',
    loadComponent: () =>
      import('../components/coordinates/coordinates.component').then((m) => m.CoordinatesComponent)
  },
  {
    path: 'current',
    loadComponent: () =>
      import('../components/current/current.component').then((m) => m.CurrentComponent)
  },
  {
    path: 'hourly',
    loadComponent: () =>
      import('../components/hourly/hourly.component').then((m) => m.HourlyComponent)
  },
  {
    path: 'daily',
    loadComponent: () => import('../components/daily/daily.component').then((m) => m.DailyComponent)
  }*/
];
