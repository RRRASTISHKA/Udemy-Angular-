import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home.component';
import { GifBoxComponent } from './components/gif-box/search-gif.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    GifBoxComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
