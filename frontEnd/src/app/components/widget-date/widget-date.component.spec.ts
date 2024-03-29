import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDateComponent } from './widget-date.component';

describe('WidgetDateComponent', () => {
  let component: WidgetDateComponent;
  let fixture: ComponentFixture<WidgetDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
