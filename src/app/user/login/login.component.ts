import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AngularFireAuth) { }
  credentials = {
    email: '',
    password: '',
  };

  alertColor = '';
  showAlert = false;
  alertMsg = 'please wait while we log you in';
  showSumbitButton = false;

  async login() {
    this.alertColor = 'blue';
    this.showAlert = true;
    this.alertMsg = 'please wait while we log you in';
    this.showSumbitButton = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error: any) {
      this.alertMsg = error.message;
      this.alertColor = 'red';
      this.showAlert = true;
      this.showSumbitButton = false;
      return;
    }
    this.alertColor = 'green';
    this.showAlert = true;
    this.showSumbitButton = true;
    this.alertMsg = 'logged in';
  }

  ngOnInit(): void { }
}
