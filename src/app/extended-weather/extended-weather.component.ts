import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-extended-weather',
  templateUrl: './extended-weather.component.html',
  styleUrls: ['./extended-weather.component.css']
})
export class ExtendedWeatherComponent implements OnInit {

  @Input() city: String;
  forecastWeather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.get10DayForecast(this.city)
        .subscribe((data) => {
          if(data && data.forecast && data.forecast.simpleforecast && data.forecast.simpleforecast.forecastday){
              this.forecastWeather = data.forecast.simpleforecast.forecastday;
          }
      })
  }
    
  getTemp(type, index) {
      return type === 'high' ? this.forecastWeather[index].high.fahrenheit + ' F' : this.forecastWeather[index].low.fahrenheit + ' F';
  }

}
