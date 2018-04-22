import { Component, OnInit } from '@angular/core';
import { LocationService} from '../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locations: String[];
  constructor(private locationService: LocationService) { }

  ngOnInit() {
      this.locations = this.locationService.getLocations();
  }

}
