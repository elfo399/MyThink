import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNewActivityComponent } from './button-new-activity.component';

describe('ButtonNewActivityComponent', () => {
  let component: ButtonNewActivityComponent;
  let fixture: ComponentFixture<ButtonNewActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonNewActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNewActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
