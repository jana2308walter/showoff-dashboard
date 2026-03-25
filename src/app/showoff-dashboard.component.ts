import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { AsideComponent } from '../components/aside/aside.component';
import { CardComponent } from '../components/card/card.component';
import { CardRowComponent } from '../components/card-row/card-row.component';
import { ContentComponent } from '../components/content/content.component';
import { LayoutComponent } from '../components/layout/layout-component';
import { LogoComponent } from '../components/logo/logo-component';

@Component({
  selector: 'sod-root',
  imports: [
    HeaderComponent,
    AsideComponent,
    CardComponent,
    CardRowComponent,
    ContentComponent,
    LayoutComponent,
    LogoComponent
  ],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {}
