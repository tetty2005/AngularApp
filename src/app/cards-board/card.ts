export class Card {
  public isSelected = false;
  public isLeftGame = false;
  public isVisible = false;

  constructor(
    public isWinning: boolean,
    public id: number
  ) { }
}
