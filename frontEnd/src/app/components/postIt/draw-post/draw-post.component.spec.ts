import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPostComponent } from './draw-post.component';

describe('DrawPostComponent', () => {
  let component: DrawPostComponent;
  let fixture: ComponentFixture<DrawPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
