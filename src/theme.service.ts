import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }

}
