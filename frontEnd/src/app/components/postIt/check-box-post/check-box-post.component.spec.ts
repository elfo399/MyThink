import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxPostComponent } from './check-box-post.component';

describe('CheckBoxPostComponent', () => {
  let component: CheckBoxPostComponent;
  let fixture: ComponentFixture<CheckBoxPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckBoxPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBoxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
