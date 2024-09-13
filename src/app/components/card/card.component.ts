import { Component, Input } from '@angular/core';
import { Animals } from '../../models/animals';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() animal: Animals = {};
  bgColor = '#E5E5E5';
  imgHeart = 'https://i.imgur.com/HgEHAJP.png';

  //Precisei fazer assim pra economizar tempo. A maneira ideal deveria ser pelo scss.

  changeHeart() {
    const defaultColor = '#E5E5E5';
    const activeColor = '#bf80ff33';
    const activeImage = 'https://i.imgur.com/O55VYIy.png';
    const defaultImage = 'https://i.imgur.com/HgEHAJP.png';

    if (this.bgColor === defaultColor) {
      this.bgColor = activeColor;
      this.imgHeart = activeImage;
    } else {
      this.bgColor = defaultColor;
      this.imgHeart = defaultImage;
    }
  }
}
