import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path:'',
    component:BasicsPageComponent
  },
  {
    path:'numbers',
    component:NumbersPagesComponent
  },
  {
    path:'uncommon',
    component:UncommonPagesComponent
  },

  {
    path:'custom',
    component:OrderComponent
  },

  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
