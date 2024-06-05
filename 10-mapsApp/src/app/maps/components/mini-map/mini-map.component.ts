import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl, { Marker } from 'mapbox-gl';
import { map } from 'rxjs';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input()
  lngLat?:[number,number];



  ngAfterViewInit(): void {
    if(!this.lngLat) return;
    if(!this.divMap?.nativeElement) return;


    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      accessToken : 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A',
      interactive:false
    });



    new Marker().setLngLat(this.lngLat).addTo(map);

  }




}
