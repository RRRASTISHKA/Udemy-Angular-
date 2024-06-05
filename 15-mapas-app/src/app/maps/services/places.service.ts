import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  public userLocation?:[number,number] ;

  public  isLoadingPlaces: boolean= false;

  public places: Feature[]=[];


  get isUserLocationReady():boolean{
    return !!this.userLocation
  }

  constructor(
    private http:HttpClient,
    private mapsService:MapService
  ) {
    this.getUserLocation();
  }


public async getUserLocation():Promise<[number,number]>{
  return new Promise((resolve,reject) =>{
    navigator.geolocation.getCurrentPosition(
      ({coords})=> {

        this.userLocation=[coords.longitude, coords.latitude];
        resolve(this.userLocation) ;
      },
      (err) => {
        alert('no se pudo obtener la geolocalizacion')
        console.log(err);
        reject();
      }
    )

  } );
 }

 getPlacesByQuery(query: string=''){


  this.isLoadingPlaces=true;


    this.http.get<PlacesResponse>(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}&limit=6&proximity=ip&language=es&access_token=pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A`)
    .subscribe(resp =>{


      console.log(resp)

      this.isLoadingPlaces=false;
      this.places=resp.features;
      this.mapsService.createMarkersFromPlaces(this.places, this.userLocation!)
    })
 }



 deletePlaces(){
  this.places=[]
 }



}
