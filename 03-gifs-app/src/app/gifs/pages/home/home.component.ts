
import {Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-home-page',
    standalone: false,
    templateUrl: "./home.component.html",
    styleUrl: './home.component.css',

})
export class HomePageComponent {

  constructor(private gifsService:GifsService){}

  get gifs(): Gif[]{
    return this.gifsService.gifList;
  }

 }
