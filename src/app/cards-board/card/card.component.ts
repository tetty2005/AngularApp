import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() card: Card;
  public text = 'Where is a car?';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

  onClick() {
    console.log('card:', this.card.isWinning);
    this.card.isSelected = true;
    this.text = 'It`s your first chose!';
  }

}
