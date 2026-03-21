import { bootstrapApplication } from '@angular/platform-browser';
import { etdConfig } from './app/etd.config';
import { EtdComponent } from './app/etd.component';

bootstrapApplication(EtdComponent, etdConfig).catch((err) => console.error(err));
