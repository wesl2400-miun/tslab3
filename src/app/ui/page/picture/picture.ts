import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Image } from '../../../logic/model/Image';

@Component({
  selector: 'app-picture',
  imports: [CommonModule],
  templateUrl: './picture.html',
  styleUrl: './picture.css',
})
export class Picture {
  public images: Image[];

  constructor() {
    this.images = [
      new Image('coast1', 
        'Havsvågor slår mot en klippa'),
      new Image('coast2', 
        'En stenbro går över ' + 
        'ett hav och leder till en fyr'),
      new Image('coast3', 
        'Havsvågor slåt mot en klippig strand'),
    ];
  }
}
