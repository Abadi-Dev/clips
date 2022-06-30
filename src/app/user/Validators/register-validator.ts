import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class RegisterValidator {
  static match(controlName: string, matchingControlName: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if (!matchingControl || !control) {
        return { controlNotFound: false };
      }
      const error =
        matchingControl.value === control.value ? null : { noMatch: true };
      return error;
    };
  }
}
