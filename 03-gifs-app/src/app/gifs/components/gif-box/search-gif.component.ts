import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-box',
  templateUrl: './search-gif.component.html'
})

export class GifBoxComponent  {
  constructor() { }

  @Input()
  public gifs: Gif[]=[];
}
