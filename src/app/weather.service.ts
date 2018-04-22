import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  private apiUrl = 'http://api.wunderground.com/api/68ab8a18fc8bfed4/';

  constructor(private http: HttpClient) { }

  public getCurrentWeather(city: String): Observable<Object> {
      return this.http.get(this.apiUrl + 'conditions/q/' + city + '.json');
  }

  public get10DayForecast(city: String): Observable<any> {
      return this.http.get(this.apiUrl + 'forecast10day/q/' + city + '.json');
  }

}
