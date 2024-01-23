import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private date = new BehaviorSubject<Date>(new Date());
  hole$ = this.date.asObservable();

  changeDate(inputDate: any) {
    this.date.next(inputDate);
  }

  constructor() { }
}
