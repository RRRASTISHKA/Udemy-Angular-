import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/homePage/homePage.component';
import { AboutPageComponent } from './components/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
HomePageComponent,
AboutPageComponent,
SideBarComponent,
ContactPageComponent,
SearchBoxComponent,
LoadingSpinnerComponent
  ]
})
export class SharedModule { }
