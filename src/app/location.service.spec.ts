import { TestBed, inject } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of locations to display weather', inject([LocationService], (locationService: LocationService) => {
    expect(locationService.getLocations().length).toBeGreaterThan(0);
  }));
});
