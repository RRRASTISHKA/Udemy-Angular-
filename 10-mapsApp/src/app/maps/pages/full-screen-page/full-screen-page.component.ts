import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import  mapboxgl from 'mapbox-gl';

//(mapboxgl as any).accessToken = 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

if(!this.divMap) return;

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      accessToken : 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A',
    });
  }




}
