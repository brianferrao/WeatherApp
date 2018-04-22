import { Component, OnInit, Input } from '@angular/core';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() city: String;
  currentWeather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.getCurrentWeather(this.city).subscribe((data: any) => {
          this.currentWeather = data.current_observation;
      }, (error) => {
          console.log(error);
      });
  }
  //get current temperature or feels like temperature based on prop value
  getTemp(prop) {
      return this.currentWeather[prop+'_f'] + ' F';
  }

}
