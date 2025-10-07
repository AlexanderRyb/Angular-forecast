import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // <-- Import your appConfig
import { App } from './app/app'; // <-- Import your AppComponent

bootstrapApplication(App, appConfig).catch(err => console.error(err));