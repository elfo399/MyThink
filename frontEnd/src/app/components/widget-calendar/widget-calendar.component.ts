import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-widget-calendar',
  templateUrl: './widget-calendar.component.html',
  styleUrl: './widget-calendar.component.scss'
})
export class WidgetCalendarComponent {
  @Input() selected: Date | null = null;

  constructor(
    private calendarService: CalendarService,
    private datePipe: DatePipe
  ) {}

  onMyDateChange(newDate: any) {
    console.log(newDate);
    this.calendarService.changeDate(newDate);
  }
}
