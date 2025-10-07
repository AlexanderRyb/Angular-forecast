import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { UnitService } from '../../unit.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'settings-block',
  templateUrl: './settings-block.html',
  styleUrls: ['./settings-block.css'],
  standalone: true
})
export class SettingsBlock {
  isDarkTheme = false;

  constructor(public languageService: LanguageService, public unitService: UnitService, public themeService: ThemeService) {}

  toggleLanguage() {
    this.languageService.toggle();
  }

 toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  document.documentElement.classList.toggle('dark', this.isDarkTheme);
}

  get currentLanguage() {
    return this.languageService.lang();
  }
}