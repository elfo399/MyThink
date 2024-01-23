import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  countText: string[] = ["1"];
  countDraw: string[] = ["1"];
  countCalendar: string[] = ["1"];
  countBirthday: string[] = ["1"];
  countCheckbox: string[] = ["1"];
  countImage: string[] = ["1"];
}
