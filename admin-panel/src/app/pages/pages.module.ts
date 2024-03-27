import { NgModule } from '@angular/core';

import { NbMenuModule } from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, NbMenuModule, ThemeModule, DashboardModule],
})
export class PagesModule {}
