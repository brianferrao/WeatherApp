import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ExtendedComponent } from './extended.component';
import { LocationService } from '../location.service';

export class MockLocationService {
    public getLocations() {
        return ['OH/Cincinnati', 'MI/Detroit'];
    }
}

describe('ExtendedComponent', () => {
  let component: ExtendedComponent;
  let fixture: ComponentFixture<ExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedComponent ],
      providers: [
          {provide: LocationService, useClass: MockLocationService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the list of cities of which 10 day forecast needs to be displayed on extended screen', () => {
      expect(component.cities.length).toBe(2);
  });

  it('should contain <app-extended-weather> components in dom if location list length > 0', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-extended-weather')).toBeTruthy();
  });

  it('should not contain <app-extended-weather> components in dom if location list length = 0', () => {
      component.cities = [];
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-extended-weather')).toBeFalsy;
  });
});
