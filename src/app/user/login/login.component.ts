import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(auth: AngularFireAuth) {}
  credentials = {
    email: '',
    password: '',
  };
  async login() {
    console.log('login is done');
  }

  ngOnInit(): void {}
}
