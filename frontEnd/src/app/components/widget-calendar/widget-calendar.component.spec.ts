import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCalendarComponent } from './widget-calendar.component';

describe('WidgetCalendarComponent', () => {
  let component: WidgetCalendarComponent;
  let fixture: ComponentFixture<WidgetCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
