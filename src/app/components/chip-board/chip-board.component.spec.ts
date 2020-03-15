import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipBoardComponent } from './chip-board.component';

describe('ChipBoardComponent', () => {
  let component: ChipBoardComponent;
  let fixture: ComponentFixture<ChipBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
