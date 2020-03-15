import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { HistoryComponent } from './components/history/history.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { ChipBoardComponent } from './components/chip-board/chip-board.component';
import { BetBoardComponent } from './components/bet-board/bet-board.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    HistoryComponent,
    WheelComponent,
    ChipBoardComponent,
    BetBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
