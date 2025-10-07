import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WeatherService } from '../weather';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-navigation',
  standalone:true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './card-navigation.html',
  styleUrl: './card-navigation.css'
})
export class CardNavigation {
  
  city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.city = this.weatherService.city();
    this.weatherService.setCity(this.city); // fetch default city
  }

  searchWeather() {
    if (this.city.trim()) {
      this.weatherService.setCity(this.city.trim());
    }
  }
}
