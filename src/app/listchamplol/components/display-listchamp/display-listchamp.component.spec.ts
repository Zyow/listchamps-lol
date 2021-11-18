import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListchampComponent } from './display-listchamp.component';

describe('DisplayListchampComponent', () => {
  let component: DisplayListchampComponent;
  let fixture: ComponentFixture<DisplayListchampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayListchampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListchampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
