import { bootstrapApplication } from '@angular/platform-browser';
import { showoffDashboardConfig } from './app/showoff-dashboard.config';
import { ShowoffDashboardComponent } from './app/showoff-dashboard.component';

bootstrapApplication(ShowoffDashboardComponent, showoffDashboardConfig).catch((err) =>
  console.error(err)
);
