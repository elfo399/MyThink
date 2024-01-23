import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  isButtonClicked = true;

  changeThemeMode() {
    this.isButtonClicked = !this.isButtonClicked;
    if(this.isButtonClicked) {
      this.renderer.setAttribute(this.document.body, 'class', 'lightMode');
    } else {
      this.renderer.setAttribute(this.document.body, 'class', 'darkMode');
    }
  }
}
