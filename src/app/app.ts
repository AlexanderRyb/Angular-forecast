import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, Event, RoutesRecognized } from '@angular/router';
import { CardNavigation } from "./card-navigation/card-navigation";
import { SettingsBlock } from './settings-block/settings-block';
import { FormsModule } from '@angular/forms';
import { DetailsCard } from "./details-card/details-card";
import { CommonModule } from '@angular/common';
import {slideInAnimation} from './route-animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardNavigation,
    SettingsBlock,
    FormsModule,
    DetailsCard,
    
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [slideInAnimation],

})
export class App {
prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  constructor(private router: Router) {
    
  }
}