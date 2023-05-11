import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { SearchComponent } from './search/search.component';
import { AppFooterComponent } from './footer/app-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    HourlyForecastComponent,
    WeeklyForecastComponent,
    SearchComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
