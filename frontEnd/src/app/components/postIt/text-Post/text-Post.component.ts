import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-text-Post',
  templateUrl: './text-Post.component.html',
  styleUrl: './text-Post.component.scss',
  standalone: true,
  imports: [CdkDrag],
})
export class TextPostComponent {
}
