import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.css']
})
export class WeeklyForecastComponent {
  @Input() forecasts: any[] = [];
}
