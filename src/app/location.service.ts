import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  cities: String[] = ['MI/Detroit', 'OH/Cincinnati', 'IL/Chicago', 'NY/New York'];
  constructor() { }

  public getLocations() {
      return this.cities;
  }

}
