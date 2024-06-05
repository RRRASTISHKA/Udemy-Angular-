import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
