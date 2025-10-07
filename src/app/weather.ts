import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'de76de5ca192674c7c2b115dd1cd6772'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Shared reactive state
  private _city = signal<string>('Lviv'); 
  private _weather = signal<any | null>(null);

  constructor(private http: HttpClient) {
    this.fetchWeather(this._city());
  }

  get city() {
    return this._city;
  }

  get weather() {
    return this._weather;
  }

  setCity(city: string) {
    this._city.set(city);
    this.fetchWeather(city);
  }

  private fetchWeather(city: string) {
    this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`)
      .subscribe(data => this._weather.set(data));
  }

 getFiveDayForecast(city: string): Observable<any> {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
  return this.http.get(url);
}

}