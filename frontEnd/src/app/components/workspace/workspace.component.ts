import { Component, OnInit } from '@angular/core';
import { insertText } from '../../DTO/textDTO';
import { ManagerTextPostItService } from '../../services/manager-text-post-it.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements OnInit {

  countText: insertText[] | null = null;
  countDraw: string[] | null = null;
  countCalendar: string[] | null = null;
  countBirthday: string[] | null = null;
  countCheckbox: string[] | null = null;
  countImage: string[] | null = null;

  constructor (private managerTextPostItService: ManagerTextPostItService) {}

  ngOnInit(): void {
    this.managerTextPostItService.selectAllPostIt().subscribe((allTextPostIt)=> {
      this.countText = allTextPostIt;
    });
  }

  

}
