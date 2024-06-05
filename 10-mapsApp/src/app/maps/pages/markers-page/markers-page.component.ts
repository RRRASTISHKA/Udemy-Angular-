import { Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { Color } from '../../../../../../05-pipesApp/src/app/products/interfaces/hero.interface';


  interface MarkerAndColor{
    color:string;
    marker:Marker;
  }

  interface PlainMarker{
    color:string;
    lngLat:number[]
  }


@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'

})
export class MarkersPageComponent {


  @ViewChild('map')
  public divMap?: ElementRef;



  public markers: MarkerAndColor[]=[]



  public map?: Map;
  public currentLngLat:LngLat= new LngLat(-7.772972329966933, 42.60916849296751);

  ngAfterViewInit(): void {
    if (!this.divMap) return;

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13,
      accessToken: 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A',
    });

    this.readFromLocalStorage();

    //const markerHtml = document.createElement('div');
    //markerHtml.innerHTML='Maksym Kazantcev'


    //const marker = new Marker({
      //color:'purple'
      //element: markerHtml
   // }).setLngLat(this.currentLngLat).addTo(this.map);
  }

  createMarker(){

    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat= this.map?.getCenter();


    this.addMarker(lngLat, color)
  }




  addMarker(lngLat:LngLat, color: string){
    if(!this.map) return;

    const marker = new Marker({
      color:color,
      draggable:true

    }).setLngLat(lngLat).addTo(this.map)
    this.markers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

      marker.on('dragend', () => this.saveToLocalStorage() );

  }


  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker:Marker){
        this.map?.flyTo({
          zoom:14,
          center: marker.getLngLat()
        })
  }



  saveToLocalStorage(){
const plainMarkers: PlainMarker[]=this.markers.map(({color, marker}) => {
    return{
      color,
      lngLat: marker.getLngLat().toArray()
    }
});
  localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));

  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString ); //! OJO!

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat );

      this.addMarker( coords, color );
    })

  }



}
