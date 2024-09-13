import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-adopt-now',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './adopt-now.component.html',
  styleUrl: './adopt-now.component.scss',
})
export class AdoptNowComponent {}
