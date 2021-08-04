import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavebookingComponent } from './savebooking.component';

describe('SavebookingComponent', () => {
  let component: SavebookingComponent;
  let fixture: ComponentFixture<SavebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
