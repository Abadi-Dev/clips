import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
      // we can put some validators in the template but
      // its better to let angular handle them, and we should choose
      // to put them in the class or the template
      name  = new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]);
      email = new FormControl('');
      age = new FormControl();
      password = new FormControl();
      confirm_password = new FormControl();
      phone = new FormControl();


    registerForm = new FormGroup({
      name:  this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      conftirm_password: this.confirm_password,
      phone: this.phone
    });
}
