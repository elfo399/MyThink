import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-post',
  templateUrl: './birthday-post.component.html',
  styleUrl: './birthday-post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class BirthdayPostComponent {

}
