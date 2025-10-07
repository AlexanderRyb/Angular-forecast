import { Routes } from '@angular/router';
import { MainCard } from './main-card/main-card';
import { DetailsCard } from './details-card/details-card';
import { ForecastCard } from './forecast-card/forecast-card';
import { AboutCard } from './about-card/about-card';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainCard, data: { animation: 'MainCard' } },
  { path: 'details', component: DetailsCard, data: { animation: 'DetailsCard' } },
  { path: 'forecast', component: ForecastCard, data: { animation: 'ForecastCard' } },
  { path: 'about', component: AboutCard, data: { animation: 'AboutCard' } },
];