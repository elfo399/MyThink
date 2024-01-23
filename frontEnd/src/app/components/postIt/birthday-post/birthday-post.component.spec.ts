import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPostComponent } from './birthday-post.component';

describe('BirthdayPostComponent', () => {
  let component: BirthdayPostComponent;
  let fixture: ComponentFixture<BirthdayPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthdayPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
