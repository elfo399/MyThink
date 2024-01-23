import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-widget-date',
  templateUrl: './widget-date.component.html',
  styleUrl: './widget-date.component.scss',
})
export class WidgetDateComponent implements OnInit {

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.calendarService.hole$.subscribe((date) => {
      this.date = date;
    });
  }
  
  date: Date = new Date();
}
