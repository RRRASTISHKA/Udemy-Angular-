import { Component, Input } from '@angular/core';
import { CountriesRoutingModule } from '../../countries-routing.module';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles:[
`img{
  width:35px
}`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries:Country[]=[]

}
