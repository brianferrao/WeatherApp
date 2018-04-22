import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExtendedWeatherComponent } from './extended-weather/extended-weather.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './routes';
import { WeatherService } from './weather.service';
import { LocationService } from './location.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ExtendedComponent } from './extended/extended.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExtendedWeatherComponent,
    HomeComponent,
    CurrentWeatherComponent,
    ExtendedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
