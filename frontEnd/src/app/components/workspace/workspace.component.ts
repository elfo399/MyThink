import { Component, OnInit } from '@angular/core';
import { insertText, selectAllText } from '../../DTO/textDTO';
import { ManagerTextPostItService } from '../../services/manager-text-post-it.service';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements OnInit {

  body: selectAllText = {data: ""};

  countText: insertText[] | null = null;
  countDraw: string[] | null = null;
  countCalendar: string[] | null = null;
  countBirthday: string[] | null = null;
  countCheckbox: string[] | null = null;
  countImage: string[] | null = null;

  constructor (private managerTextPostItService: ManagerTextPostItService, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.createCurrentPostIt();
  }

  createCurrentPostIt() {
    this.calendarService.hole$.subscribe((date) => {
    this.body.data = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
  });

  this.managerTextPostItService.selectAllPostIt(this.body).subscribe((allTextPostIt)=> {
    this.countText = allTextPostIt;
  }); 

  }

}
