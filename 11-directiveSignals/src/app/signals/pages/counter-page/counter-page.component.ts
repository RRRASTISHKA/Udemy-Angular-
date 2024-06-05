import { Component, computed, signal } from '@angular/core';


const name = signal('Maksym');

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})


export class CounterPageComponent {


  public counter = signal(10);
  public squereCounter= computed(() => this.counter() * this.counter());


  constructor(){
    console.log(name())
  }

  increaseValue(value:number){
    this.counter.update(current => current+value);
  }





}
