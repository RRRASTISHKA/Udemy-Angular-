import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string='maksym';
  public nameUpper:string='MAKSYM';
  public fullName:string='MaksYm KaZANtsev';



  public customDate:Date=new Date();

}
