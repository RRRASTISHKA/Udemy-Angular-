import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  constructor(
    private placesService:PlacesService,
    private mapService:MapService
  ){
  }


  get isLoadingPlaces():boolean{
    return this.placesService.isLoadingPlaces
  }


  get places():Feature[]{
    return this.placesService.places
  }

  flyTo(place: Feature): void {
    const [lng, lat] = place.geometry.coordinates;
    this.mapService.flyTo([lng, lat]);
  }


 getDirections(place:Feature){
  this.placesService.deletePlaces();
  const start=this.placesService.userLocation as [number,number];
  const end = place.geometry.coordinates as [number,number];
  this.mapService.getRouteBetweenPoints(start,end)
 }

}
