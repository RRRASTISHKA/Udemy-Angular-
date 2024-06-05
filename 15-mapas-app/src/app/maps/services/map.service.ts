import { Injectable } from '@angular/core';
import {AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup} from 'mapbox-gl';
import { Feature,} from '../interfaces/places';
import { HttpClient } from '@angular/common/http';
import { DirectionsResponse } from '../interfaces/directions';
import { Route } from '../interfaces/directions';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?:Map;
  private markers:Marker[]=[];

  get isMapReady(){
    return !!this.map;
  }


  constructor(private httpDirections: HttpClient){

  }

  setMap(map:Map){
    this.map=map;
  }


  flyTo(coords: LngLatLike){
      if(!this.isMapReady) throw Error('El mapa no esta inicializado');

      this.map?.flyTo({
        zoom:14,
        center:coords
      })
  }

  createMarkersFromPlaces(places:Feature[], userLocation: [number,number]){

      if(!this.map) throw Error('Mapa no inicializado')

      this.markers.forEach(marker=> marker.remove())

      const  newMarkers=[]

      for(const place of places ){
        const [lng, lat] = place.geometry.coordinates;
        const popup= new Popup()
        .setHTML(`
        <h6>${place.properties.context.place.name}</h6>
        `);
        const newMarker=new Marker().setLngLat([lng,lat]).setPopup(popup).addTo(this.map);

        newMarkers.push(newMarker)
      }
      this.markers= newMarkers;


      //limites del mapa
      if(places.length ===0) return;

      const bounds = new LngLatBounds();

      newMarkers.forEach(marker => bounds.extend(marker.getLngLat()))
      bounds.extend(userLocation);


      this.map.fitBounds(bounds, {
        padding:200
      })
  }


  getRouteBetweenPoints(start:[number, number], end:[number,number]){

    this.httpDirections.get<DirectionsResponse>(`https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(',')}%3B${end.join(',')}?alternatives=false&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A`)
      .subscribe(resp => this.drawPolyline(resp.routes[0]));


  }

  private drawPolyline(route: Route) {
    console.log({ kms: route.distance / 1000, duration: route.duration/60 });

    const coord= route.geometry.coordinates;
    const start= coord[0] as [number,number]

    const bounds= new LngLatBounds();

    coord.forEach(([lng,lat])=> {
      const newCoord:[number,number]=[lng,lat]
      bounds.extend(newCoord)})

    this.map?.fitBounds(bounds,{
      padding:200
    });


    const sourceData:AnySourceData={
      type: 'geojson',
      data:{
        type: 'FeatureCollection',
        features:[
          {
            type:'Feature',
            properties:{},
            geometry:{
              type: 'LineString',
              coordinates:coord
            }
          }
        ]
      }
    }

//Todo limpiar ruta

if(this.map?.getLayer('RouteString')){
  this.map.removeLayer('RouteString');
  this.map.removeSource('RouteString')
}


this.map?.addSource('RouteString', sourceData);

this.map?.addLayer({
  id: 'RouteString',
  type:'line',
  source: 'RouteString',
  layout:{
    'line-cap': 'round',
    'line-join':'round'
  },
  paint:{
      'line-color': 'black',
      'line-width':3
  }
});

}


}
