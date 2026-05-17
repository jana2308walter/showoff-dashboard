import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'coordinates',
    loadComponent: () =>
      import('../components/coordinates/coordinates.component').then((m) => m.CoordinatesComponent)
  },
  {
    path: 'weather',
    loadComponent: () =>
      import('../components/weather/weather.component').then((m) => m.WeatherComponent),
    children: [
      {
        path: 'current',
        loadComponent: () =>
          import('../components/weather/current/current-weather.component').then(
            (m) => m.CurrentWeatherComponent
          )
      },
      {
        path: 'hourly',
        loadComponent: () =>
          import('../components/weather/hourly/hourly-weather.component').then(
            (m) => m.HourlyWeatherComponent
          )
      },
      {
        path: 'daily',
        loadComponent: () =>
          import('../components/weather/daily/daily-weather.component').then(
            (m) => m.DailyWeatherComponent
          )
      },
      {
        path: '',
        redirectTo: 'current',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'coordinates',
    pathMatch: 'full'
  }
];
