import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          WeatherService
      ],
      imports: [
          HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([WeatherService], (weatherService: WeatherService) => {
    expect(weatherService).toBeTruthy();
  }));

  it('should fetch current weather correctly for given city', inject([WeatherService, HttpTestingController],
      (weatherService: WeatherService, backend: HttpTestingController) => {
        weatherService.getCurrentWeather('OH/Cincinnati').subscribe(
          (data: any) => {
            data = data.current_observation;
            expect(data.temp_f).toBe(51.8);
            expect(data.temp_c).toBe(11);
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: 'http://api.wunderground.com/api/68ab8a18fc8bfed4/conditions/q/OH/Cincinnati.json'
          })
          .flush({
            'current_observation': {
                'temp_f': 51.8,
                'temp_c': 11
            }
          });
      }
    )
  );

  it('should fetch 10 day weather correctly for given city', inject([WeatherService, HttpTestingController],
      (weatherService: WeatherService, backend: HttpTestingController) => {
        weatherService.get10DayForecast('OH/Cincinnati').subscribe(
          (data: any) => {
            data = data.forecast;
            expect(data).toBeTruthy();
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: 'http://api.wunderground.com/api/68ab8a18fc8bfed4/forecast10day/q/OH/Cincinnati.json'
          })
          .flush({
            'forecast': {
                
            }
          });
      }
    )
  );

});
