import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-post',
  templateUrl: './calendar-post.component.html',
  styleUrl: './calendar-post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class CalendarPostComponent {

}
