import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ExtendedWeatherComponent } from './extended-weather.component';
import { WeatherService } from '../weather.service';

let mockData = {
    'forecast' : {
        'simpleforecast': {
            'forecastday': [
                {
                    'date': {
                        'day': 22,
                        'month': 4
                    },
                    'high': {
                        'fahrenheit': '68',
                        'celsius': '20'
                    },
                    'low': {
                        'fahrenheit': '52',
                        'celsius': '11'
                    },
                    'icon_url': 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
                },
                {
                    'date': {
                        'day': 23,
                        'month': 4
                    },
                    'high': {
                        'fahrenheit': '72',
                        'celsius': '23'
                    },
                    'low': {
                        'fahrenheit': '56',
                        'celsius': '13'
                    },
                    'icon_url': 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
                }
            ]
        }
    }
};

export class MockWeatherService {
    public get10DayForecast(city: String): Observable<Object> {
      return Observable.create((observer: Observer<Object>) => {
        observer.next(mockData);
      });
    }
}

describe('ExtendedWeatherComponent', () => {
  let component: ExtendedWeatherComponent;
  let fixture: ComponentFixture<ExtendedWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedWeatherComponent ],
      providers : [
          {'provide': WeatherService, 'useClass': MockWeatherService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set forecastWeather after init ', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.get10DayForecast('OH/Cincinnati').subscribe((data) => {
        component.forecastWeather = data.forecast.simpleforecast.forecastday;
    });
    expect(component.forecastWeather.length).toBe(2);
  }));

  it('should process getTemp method properly', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.get10DayForecast('OH/Cincinnati').subscribe((data) => {
        component.forecastWeather = data.forecast.simpleforecast.forecastday;
    });
    expect(component.getTemp('high', 0)).toBe('68 F');
    expect(component.getTemp('low', 0)).toBe('52 F');
  }));

  it('should render view if forecastWeather object is loaded', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.get10DayForecast('OH/Cincinnati').subscribe((data) => {
        component.currentWeather = data.forecast.simpleforecast.forecastday;
    });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  }));

  
});
