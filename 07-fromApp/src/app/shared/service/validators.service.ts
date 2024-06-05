import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorService {

public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

public cantBeStrider=(control:FormControl):ValidationErrors | null=>{

  const value: string=control.value.trim().toLowerCase();

  if(value==='strider'){
    return{
      noStrider:true,
    }
  }

return null
}

public isValidField(field: string, form:FormGroup){
  return form.controls[field].errors && form.controls[field].touched
}


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


}
