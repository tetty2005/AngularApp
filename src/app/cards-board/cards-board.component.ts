import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-cards-board',
  templateUrl: './cards-board.component.html',
  styleUrls: ['./cards-board.component.scss']
})

export class CardsBoardComponent implements OnInit {
  cards: Set<Card> = new Set();

  constructor() { }

  ngOnInit() {
    this.generateRandomCards();
  }

  generateRandomCards(): void {
    const winningCardIndex = this.getRandomNumber(3);

    for (let i = 0; i < 3; i++) {
      const isWinning = i === winningCardIndex;
      const card = new Card(isWinning, i);
      this.cards.add(card);
    }
  }

  removeOneCard() {
    const nonWinningIdCards = [];
    this.cards.forEach((card) => {
      if (!card.isSelected && !card.isWinning) {
        nonWinningIdCards.push(card.id);
      }
    });
    const nonWinningId = nonWinningIdCards.length === 1
      ? nonWinningIdCards[0]
      : nonWinningIdCards[this.getRandomNumber(2)];

    this.cards.forEach((card) => card.isLeftGame = card.id === nonWinningId);
  }

  getRandomNumber(count: number) {
    return Math.floor(Math.random() * count);
  }

  startNewGame() {
    this.cards.clear();
    this.generateRandomCards();
  }
}
