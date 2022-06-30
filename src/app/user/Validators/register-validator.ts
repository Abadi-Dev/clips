import { AbstractControl, ValidationErrors } from '@angular/forms';
export class RegisterValidator {
  static match(group: AbstractControl): ValidationErrors | null {
    const control = group.get('password');
    const matchingControl = group.get('confirm_password');
    if (!matchingControl || !control) {
      return { controlNotFound: false };
    }
    const error = matchingControl === control ? null : { noMatch: true };
    return error;
  }
}
