import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup=this.fb.group({
    name: ['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    //email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[new EmailValidator()]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required, this.validatorService.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],

  },
  {
    validators:[
      this.validatorService.isFieldOneEqualFieldTwo('password','password2')
    ]

  }
)

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator:EmailValidator
  ){}


  isValidField(field:string){
      return this.validatorService.isValidField(field,this.myForm)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
    //this.myForm.reset();
  }



}
