import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
      constructor(private auth: AuthService){
      }
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

      alertColor = "red"
      showAlert = false;
      alertMsg = 'please wait while your account is being created!'
      showSumbitButton = true;

    registerForm = new UntypedFormGroup ({
      name:  this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      conftirm_password: this.confirm_password,
      phone: this.phone
    });
    async register(){
      this.showSumbitButton=false;
      try {
        await this.auth.createUser(this.registerForm.value)
      } catch (error: any) {
        this.alertMsg = error.message;
        this.alertColor = 'red';
        this.showAlert = true;
        this.showSumbitButton = true;
        return;
      }
      this.alertMsg = "Success! your account has ben created";
      this.alertColor = 'green';
      this.showAlert = true;
      this.showSumbitButton = true;
    }
  }
