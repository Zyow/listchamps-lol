import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchampPageComponent } from './listchamp-page.component';

describe('ListchampPageComponent', () => {
  let component: ListchampPageComponent;
  let fixture: ComponentFixture<ListchampPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchampPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchampPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
