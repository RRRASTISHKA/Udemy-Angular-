import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthentcatedGuard } from './auth/guards/is-authentcated.guard';
import { isNotAuthenticaterGuard } from './auth/guards/is-not-authenticater.guard';

const routes: Routes = [

  {
    path: 'auth',
    //guards
    canActivate:[isNotAuthenticaterGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'dashboard',
    //guards
    canActivate:[isAuthentcatedGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },

  {
    path: '**',
    //guards
    redirectTo: 'auth'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
