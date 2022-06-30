import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { promises } from 'dns';
import { Http2ServerRequest } from 'http2';
import { Observable } from 'rxjs';

@Injectable()
export class EmailTaken implements AsyncValidator {
  constructor(private auth: AngularFireAuth) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return this.auth
      .fetchSignInMethodsForEmail(control.value)
      .then((response) => (response.length ? { emailTaken: true } : null));
  }
}
