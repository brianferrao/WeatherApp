import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const mockData = {
    'display_location' : {
        'full' : 'Cincinnati, OH'
    },
    'temp_f': 51.8,
    'temp_c': 11,
    'feelslike_f': 62.5,
    'feelslike_c': 13,
    'relative_humidity': '14%'
};
class MockWeatherService {
    public getCurrentWeather(city: String): Observable<Object> {
      return Observable.create((observer: Observer<Object>) => {
      observer.next(mockData);
    });
}
}

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponent ],
      providers: [
        { provide: WeatherService, useClass: MockWeatherService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain temp_f in data', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.getCurrentWeather('OH/Cincinnati').subscribe((data) => {
        component.currentWeather = data;
    });
    expect(component.currentWeather.temp_f).toBe(51.8);
  }));

  it('should process getTemp method properly', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.getCurrentWeather('OH/Cincinnati').subscribe((data) => {
        component.currentWeather = data;
    });
    component.tempUnit = 'F';
    expect(component.getTemp('temp')).toBe('51.8 F');
    expect(component.getTemp('feelslike')).toBe('62.5 F');
    component.tempUnit = 'C';
    expect(component.getTemp('temp')).toBe('11 C');
    expect(component.getTemp('feelslike')).toBe('13 C');
  }));

  it('should render view if currentWeather object is loaded', inject([WeatherService], (weatherService: WeatherService) => {
    weatherService.getCurrentWeather('OH/Cincinnati').subscribe((data) => {
        component.currentWeather = data;
    });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  }));

  it('should not render view if currentWeather object is loaded', inject([WeatherService], (weatherService: WeatherService) => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container')).toBeFalsy();
  }));
});
