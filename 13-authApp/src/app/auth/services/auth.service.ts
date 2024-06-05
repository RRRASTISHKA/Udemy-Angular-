import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { CheckTokenResponse, LoginResponse, User } from '../interfaces';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string=environments.baseUrl;

  private http = inject(HttpClient);
  private _currentUser= signal<User | null>(null);

  private _authStatus= signal<AuthStatus>(AuthStatus.checking);

  //! Al mundo exterior
  public currentUser= computed(() => this._currentUser());
  public authStatus= computed(() => this._authStatus());


  constructor() {
    this.checkAuthStatus().subscribe();

  }


  private setAuthentication(user: User, token:string):boolean{
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;

  }


  login(email: string, password:string):Observable<boolean>{

    const url=  `${this.baseUrl}/auth/login`;
    const body= {email:email, password:password};


    return this.http.post<LoginResponse>(url, body)
    .pipe(
      map( ({user, token}) => this.setAuthentication(user,token)),
      //Todo errores
      catchError(err =>  throwError(() => err.error.message)



    )
  )
  }

  register(name: string, email: string, password:string):Observable<boolean>{

    const url=  `${this.baseUrl}/auth/register`;
    const body= {name:name, email:email, password:password};


    return this.http.post<RegisterResponse>(url, body)
    .pipe(
      map( ({user, token}) => this.setAuthentication(user,token)),
      //Todo errores
      catchError(err =>  throwError(() => err.error.message)
    )
  )
  }


  checkAuthStatus():Observable<boolean>{

    const url= `${this.baseUrl}/auth/check-token`;
    const  token = localStorage.getItem('token');

    if(!token){
      this.logout();
      return of(false)}

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    return this.http.get<CheckTokenResponse>(url,{headers})
    .pipe(
      map( ({token, user}) => this.setAuthentication(user,token)),
      //error
      catchError(() => {
       this._authStatus.set(AuthStatus.notAuthenticated);
      return  of(false);
      })
    )

  }

  logout(){
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)
  }


  //Register


  //password = password

  isFieldOneEqualFieldTwo(field1:string,field2:string){
    return (formGroup:FormGroup):ValidationErrors | null =>{
        const fieldOne=formGroup.get(field1)?.value;
        const fieldTwo=formGroup.get(field2)?.value;

        if(fieldOne !== fieldTwo){
          formGroup.get(field2)?.setErrors({notEqual:true});
          return {
            notEqual:true
          }
        }

        formGroup.get(field2)?.setErrors(null);

        return null;
    }
  }

  //validator
  public isValidField(field: string, form:FormGroup){
    return form.controls[field].errors && form.controls[field].touched
  }
}
