import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'   
})
export class LanguageService {
  lang = signal<'ENG' | 'UA'>('ENG');

  locale = computed(() => {
    return this.lang() === 'ENG' ? 'en-US' : 'uk-UA';
  });

  toggle() {
    this.lang.set(this.lang() === 'ENG' ? 'UA' : 'ENG');
  }

  set(lang: 'ENG' | 'UA') {
    this.lang.set(lang);
  }
    isUa(): boolean {
    return this.lang() === 'UA';
  }

}
