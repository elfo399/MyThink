import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostItService {

  private countText: string[] = [];
  private countDraw: string[] = [];
  private countCalendar: string[] = [];
  private countBirthday: string[] = [];
  private countCheckbox: string[] = [];
  private countImage: string[] = [];

  constructor() { }
}
