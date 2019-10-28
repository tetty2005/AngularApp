import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsBoardComponent } from './cards-board/cards-board.component';
import { CardComponent } from './cards-board/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsBoardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
