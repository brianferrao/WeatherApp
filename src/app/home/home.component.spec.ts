import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { LocationService } from '../location.service';

export class MockLocationService {
    public getLocations() {
        return ['OH/Cincinnati', 'MI/Detroit'];
    }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers : [
          {provide: LocationService, useClass: MockLocationService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the list of cities of which weather needs to be displayed on home screen', () => {
      expect(component.locations.length).toBe(2);
  });

  it('should contain <app-current-weather> components in dom if location list length > 0', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-current-weather')).toBeTruthy();
  });

  it('should not contain <app-current-weather> components in dom if location list length = 0', () => {
      component.locations = [];
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-current-weather')).toBeFalsy;
  });
});
