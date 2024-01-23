import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-box-post',
  templateUrl: './check-box-post.component.html',
  styleUrl: './check-box-post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class CheckBoxPostComponent {

}
