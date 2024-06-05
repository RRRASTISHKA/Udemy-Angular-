import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {

  public name: string='Fernando';
  public gender: 'male'|'female'='male';
  public invitationMap={
    'male': 'invitarlo',
    'female':'invitarla'
  }


  changeClient(): void{
    this.name='Melisa';
    this.gender='female'
  }


  //i18nPlural
  public clientes: string[]=['Maria','Pedro','Maria','Juan','Eduardo','Natalia','Fernando'];
  public clientsMap={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente espertando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clientes.shift();
  }


  //KeyValue Pipe

  public person={
    name:"Fernando",
    age:36,
    address:"Ottawa,Canada"
  }


  //Async Pipe

  public myObservableTimer: Observable<number>= interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );


  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
    },3500)
  }

)

}
