import { Component, Input } from '@angular/core';
import { Animals } from '../../models/animals';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() animal: Animals = {};

  ngOnInit() {
    console.log(this.animal);
  }
}
