import { AbstractControl, ValidationErrors } from '@angular/forms';
export class RegisterValidator {
  static match(group: AbstractControl): ValidationErrors | null {
    // TODO: compare the value from the "password" field to the value in the "confirm password field"
    return null;
  }
}
