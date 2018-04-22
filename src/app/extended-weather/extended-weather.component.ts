import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-extended-weather',
  templateUrl: './extended-weather.component.html',
  styleUrls: ['./extended-weather.component.css']
})
export class ExtendedWeatherComponent implements OnInit {
  //property passed to fetch the forecast data
  @Input() city: String;
  forecastWeather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      // fetch the forecast data on init
      this.weatherService.get10DayForecast(this.city)
        .subscribe((data: any) => {
          if(data && data.forecast && data.forecast.simpleforecast && data.forecast.simpleforecast.forecastday){
              this.forecastWeather = data.forecast.simpleforecast.forecastday;
          }
      }, (error) => {
          console.log(error);
      })
  }
  // this method returns temperature string for high/low temperatures. Takes index as input to locate the correct object in the array.  
  getTemp(type, index) {
      return type === 'high' ? this.forecastWeather[index].high.fahrenheit + ' F' : this.forecastWeather[index].low.fahrenheit + ' F';
  }

}
