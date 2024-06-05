import { NgModule } from '@angular/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';



@NgModule({
  declarations: [SidebarComponent,
    LazyImageComponent
  ],
  imports: [
CommonModule
  ],
  exports:[
SidebarComponent,
LazyImageComponent
  ]
})
export class SharedModule { }
