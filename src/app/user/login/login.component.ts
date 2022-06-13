import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email : "",
    password: ""
  }
  register(){
    console.log('login is done');

  }

  constructor() { }

  ngOnInit(): void {
  }

}
