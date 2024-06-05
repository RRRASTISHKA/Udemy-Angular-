import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap} from 'rxjs';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {


  public country?: Country;


constructor(
  private acrivatedRoute:ActivatedRoute,
  private countriesService:CountryService,
  private router: Router,
){}

ngOnInit(): void {
this.acrivatedRoute.params
.pipe(
  switchMap(({id})=>this.countriesService.searchCountryByAlphaCode(id))
)
.subscribe(country =>{

  if(!country) return this.router.navigateByUrl('');

  return this.country=country;
})
}
}
