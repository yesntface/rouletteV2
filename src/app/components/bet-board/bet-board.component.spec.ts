import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetBoardComponent } from './bet-board.component';

describe('BetBoardComponent', () => {
  let component: BetBoardComponent;
  let fixture: ComponentFixture<BetBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
