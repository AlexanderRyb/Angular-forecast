import { CommonModule, formatDate } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import { WeatherService } from '../weather';
import { LanguageService } from '../language.service';
import { UnitService } from '../../unit.service';


@Component({
  selector: 'app-forecast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-card.html',
  styleUrls: ['./forecast-card.css']
})export class ForecastCard {
    languageService = inject(LanguageService);
  forecast = signal<any[] | null>(null);
  private descriptions: Record<string, string> = {
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
    return this.languageService.lang() === 'UA'
      ? this.descriptions[desc.toLowerCase()] || desc
      : desc;
  }

  formatDate(ms: number): string {
    const locale = this.languageService.lang() === 'UA' ? 'uk-UA' : 'en-US';
    return formatDate(ms, 'EEE dd', locale, 'UTC');
  }


  constructor(public weatherService: WeatherService, public unitService: UnitService) {
    effect(() => {
      const w = this.weatherService.weather();
      if (!w?.name) return;

      this.weatherService.getFiveDayForecast(w.name).subscribe((data: any) => {
        const tz = data?.city?.timezone ?? 0; // seconds
        const byDay: Record<string, any[]> = {};

        for (const e of data.list) {
          const msLocal = (e.dt + tz) * 1000;          // shift to city's local time
          const key = new Date(msLocal).toDateString(); // stable day key in local time
          (byDay[key] ||= []).push({ ...e, msLocal });
        }

        const days = Object.keys(byDay)
          .slice(0, 5)
          .map(key => {
            const entries = byDay[key];

            // choose the entry closest to local noon
            const targetHour = 12;
            let best = entries[0];
            let bestDelta = Infinity;
            for (const e of entries) {
              const h = new Date(e.msLocal).getUTCHours(); // already shifted, so use UTC
              const delta = Math.abs(h - targetHour);
              if (delta < bestDelta) { bestDelta = delta; best = e; }
            }

            // temps for avg/high/low if you wish later
            const temps = entries.map((e: any) => e.main?.temp).filter((x: number) => typeof x === 'number');
            const avgTemp = temps.length ? temps.reduce((a: number, b: number) => a + b, 0) / temps.length : null;

            return {
              dateMsLocal: best.msLocal,                       // local ms; render with 'UTC' in pipe
              temp: avgTemp ?? best.main?.temp ?? null,
              icon: best.weather?.[0]?.icon ?? '01d',
              description: best.weather?.[0]?.description ?? '',
              windSpeed: best.wind?.speed ?? null,             // m/s from API
              windDeg: best.wind?.deg ?? 0                     // degrees (coming from)
            };
          });

        this.forecast.set(days);
      });
    });
  }
}