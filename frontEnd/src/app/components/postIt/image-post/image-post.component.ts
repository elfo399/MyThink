import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrl: './image-post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class ImagePostComponent {

}
