import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-draw-post',
  templateUrl: './draw-post.component.html',
  styleUrl: './draw-post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class DrawPostComponent {

}
