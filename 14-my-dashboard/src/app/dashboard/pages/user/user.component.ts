import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import {toSignal} from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title [title]="titleLable()"></app-title>


    @if (user()) {
        <section>
          <img [srcset]="user()!.avatar" [alt]="user()!.first_name">

          <div>
            <h3>Name: {{user()?.first_name}}  {{user()?.last_name}}</h3>
            <p>Email: {{user()?.email}}</p>
          </div>

        </section>
    }@else {
      <p>Loading.....</p>
    }

  `
})
export  default class UserComponent {


  public titleLable=computed(()=> {

    if(this.user()){
      return `Informacion del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }else{
      return `Usuario no existe`
    }

  })

  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService)

  public user= toSignal(
    this.route.params.pipe(
        switchMap(({id}) => this.usersService.getUserById(id))
    )


  )



  //constructor(){
  //  this.route.params.subscribe( params => {
 // })
  //}


}
