import { Component, signal } from '@angular/core';
import { WeatherService } from '../weather';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';
import { UnitService } from '../../unit.service';


@Component({
  selector: 'app-details-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './details-card.html',
  styleUrl: './details-card.css'
})
export class DetailsCard {today = new Date();

private regionNames = new Intl.DisplayNames(['en'], { type: 'region' });


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

  translations = {
    ENG: {
      feelsLike: 'Feels like',
      humidity: 'Humidity',
      pressure: 'Pressure',
      minTemp: 'Min temperature',
      maxTemp: 'Max temperature',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      cloudiness: 'Cloudiness',
      visibility: 'Visibility',
      windDirection: 'Wind direction',
      windGust: 'Wind gust',
      windSpeed: 'Wind speed',
    },
    UA: {
      feelsLike: 'Відчувається як',
      humidity: 'Вологість',
      pressure: 'Тиск',
      minTemp: 'Мінімальна температура',
      maxTemp: 'Максимальна температура',
      sunrise: 'Схід сонця',
      sunset: 'Захід сонця',
      cloudiness: 'Хмарність',
      visibility: 'Видимість',
      windDirection: 'Напрямок вітру',
      windGust: 'Пориви вітру',
      windSpeed: 'Швидкість вітру',
    }
  };


  get t() {
    return this.translations[this.languageService.lang()];
  }
  
}

