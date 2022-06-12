import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
    registerForm = new FormGroup({
      // we can put some validators in the template but
      // its better to let angular handle them, and we should choose
      // to put them in the class or the template
      name  : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]),
      email : new FormControl(''),
      age : new FormControl(),
      password : new FormControl(),
      confirm_password : new FormControl(),
      phone : new FormControl(),
    });
}
