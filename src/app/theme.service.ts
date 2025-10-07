import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggle() {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');

    root.classList.toggle('dark', !isDark);
    root.classList.toggle('light', isDark);
  }

  setDark(isDark: boolean) {
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
  }
}
