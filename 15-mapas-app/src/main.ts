import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A';




if(!navigator.geolocation){
     alert('Navegador no soporta el Geolocation');
    throw new Error('Navegador no soporta el Geolocation')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
