export class Card {
  public isWinning: boolean;
  public isSelected: boolean;

  constructor(isWinning: boolean, isSelected: boolean) {
    this.isSelected = isSelected;
    this.isWinning = isWinning;
  }
}
