import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-cards-board',
  templateUrl: './cards-board.component.html',
  styleUrls: ['./cards-board.component.scss']
})

export class CardsBoardComponent implements OnInit {
  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    this.generateRandomCards();
  }

  generateRandomCards(): void {
    const winningCardIndex = Math.floor(Math.random() * 3);

    for (let i = 0; i < 3; i++) {
      const isWinning = i === winningCardIndex;
      const card = new Card(isWinning, false);
      this.cards.push(card);
    }

    // console.log('cards', this.cards);
  }
}
