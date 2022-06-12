import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validator, Validators  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
      // we can put some validators in the template but
      // its better to let angular handle them, and we should choose
      // to put them in the class or the template
      name  = new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]);
      email = new UntypedFormControl('', [
        Validators.required,
        Validators.email
      ]);
      age = new UntypedFormControl("",[
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]);
      password = new UntypedFormControl('',[
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
      ]
      );
      confirm_password = new UntypedFormControl('',[
        Validators.required,
      ]);
      phone = new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13)
      ]);


    registerForm = new UntypedFormGroup({
      name:  this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      conftirm_password: this.confirm_password,
      phone: this.phone
    });
    register(){
      console.log('registration is done');

    }
}
