import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit,OnChanges,OnDestroy {


  @Input()
  public price: number=0;


  public interval$?:Subscription;

ngOnInit(): void {
  console.log('PriceComponent Hijo:    OnInit');

    this.interval$=interval(1000).subscribe(value => console.log(`tick: ${value}`));

}
ngOnChanges(changes: SimpleChanges): void {
  console.log('PriceComponent Hijo:    OnChanges');
  console.log({changes});
}
ngOnDestroy(): void {
  console.log('PriceComponent Hijo:    OnDestroy');
  this.interval$?.unsubscribe();
}



}
