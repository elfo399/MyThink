import { Component } from '@angular/core';
import { insertText } from '../../DTO/textDTO';
import { CalendarService } from '../../services/calendar.service';
import { ManagerTextPostItService } from '../../services/manager-text-post-it.service';

@Component({
  selector: 'app-button-new-activity',
  templateUrl: './button-new-activity.component.html',
  styleUrl: './button-new-activity.component.scss'
})
export class ButtonNewActivityComponent {

  constructor(private calendarService: CalendarService, private managerTextPostItService: ManagerTextPostItService) {}
  
  addTextPost() {
    let newPostIt: insertText = {value: "", data: ""};

    this.calendarService.hole$.subscribe((date) => {
      newPostIt.data = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
    });

    this.managerTextPostItService.insertNewPostIt(newPostIt).subscribe();
  }

}
