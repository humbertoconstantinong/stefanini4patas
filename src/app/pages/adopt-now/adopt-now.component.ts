import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Animals } from '../../models/animals';
import { AnimalsService } from '../../../services/animals.service';

@Component({
  selector: 'app-adopt-now',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './adopt-now.component.html',
  styleUrl: './adopt-now.component.scss',
})
export class AdoptNowComponent {
  constructor(private animalsService: AnimalsService) {}
  animals: Array<Animals> = [];
  ngOnInit() {
    this.animalsService.getAnimals().subscribe((response) => {
      this.animals = response;
    });
  }
}
