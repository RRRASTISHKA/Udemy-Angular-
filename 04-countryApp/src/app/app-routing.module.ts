import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/homePage/homePage.component';
import { AboutPageComponent } from './shared/components/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/components/contactPage/contactPage.component';


const routes: Routes=[
  //{
   // path:'',
   // component:HomePageComponent
 // },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },


  {
    path:'countries',
    loadChildren: ()=> import('./countries/countries.module').then(m=>m.CountriesModule)
  },

  {
    path:'**',
    redirectTo:'countries'
  }

];

@NgModule({
imports:[
RouterModule.forRoot(routes),
],
exports:[
  RouterModule
]
})
export class AppRoutingModule { }
