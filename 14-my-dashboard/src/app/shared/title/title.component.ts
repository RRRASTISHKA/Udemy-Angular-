import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <h1 class="text-3xl mb-5">{{title}}</h1>
  `,
})
export class TitleComponent {

  @Input({required: true}) title!:string;
  @Input({transform: booleanAttribute}) withShadow:boolean=false;

}
