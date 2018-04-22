import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent implements OnInit {

  cities: String[];
  constructor(private locationService: LocationService) { }

  ngOnInit() {
      this.cities = this.locationService.getLocations();
  }

}
