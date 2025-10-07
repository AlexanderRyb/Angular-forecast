import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather';
import { LanguageService } from '../language.service';
import { UnitService } from '../../unit.service';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import { bootstrapApplication } from '@angular/platform-browser';


registerLocaleData(localeUk); // ✅ Register Ukrainian locale


@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-card.html',
  styleUrls: ['./main-card.css']
})


export class MainCard {
today = new Date();

private regionNames = new Intl.DisplayNames(['en', 'uk'], { type: 'region' });


get formattedDate(): string {
  return this.today.toLocaleDateString('en-US', {
    weekday: 'short',  // Mon, Tue, Wed
    month: 'short',    // Jan, Feb, Mar
    day: 'numeric'     // 1, 2, 3
  });
}
  city = '';
  

   constructor(
    public weatherService: WeatherService,
    public languageService: LanguageService,
    public unitService: UnitService


  ) {}
  ngOnInit() {
    // default search
    this.city = 'Lviv'; // pick your city here
    this.searchWeather();
  }
  searchWeather() {
  if (this.city.trim()) {
    this.weatherService.setCity(this.city.trim());  // triggers fetch
  }
  }
  getCountryName(code: string): string {
    return this.regionNames.of(code) ?? code;
  }
  weatherDescriptions: Record<string, string> = {
  'clear sky': 'Ясне небо',
  'few clouds': 'Невелика хмарність',
  'scattered clouds': 'Розсіяні хмари',
  'broken clouds': 'Хмарно з проясненнями',
  'overcast clouds': 'Похмуро',
  'light rain': 'Легкий дощ',
  'moderate rain': 'Помірний дощ',
  'heavy intensity rain': 'Сильний дощ',
  'very heavy rain': 'Дуже сильний дощ',
  'extreme rain': 'Надзвичайно сильний дощ',
  'freezing rain': 'Крижаний дощ',
  'light intensity shower rain': 'Легкий зливовий дощ',
  'heavy intensity shower rain': 'Сильний зливовий дощ',
  'shower rain': 'Злива',
  'rain': 'Дощ',
  'thunderstorm': 'Гроза',
  'snow': 'Сніг',
  'mist': 'Туман',
};
 translateDescription(desc: string): string {
    if (this.languageService.isUa()) {
      return this.weatherDescriptions[desc.toLowerCase()] || desc;
    }
    return desc; // keep original English
  }
}