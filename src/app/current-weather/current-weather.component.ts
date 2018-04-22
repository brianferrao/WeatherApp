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
  tempUnit: String = 'F';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.getCurrentWeather(this.city).subscribe((data: any) => {
          console.log(data);
          this.currentWeather = data.current_observation;
      });
  }

  getTemp(prop) {
      return this.tempUnit === 'F' ? this.currentWeather[prop+'_f'] + ' F' : this.currentWeather[prop+'_c'] + ' C';
  }

}
