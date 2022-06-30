import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class RegisterValidator {
  static match(controlName: string, matchingControlName: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if (!matchingControl || !control) {
        console.error('Form controls can not be found in the form group');

        return { controlNotFound: false };
      }
      const error =
        matchingControl.value === control.value ? null : { noMatch: true };

      matchingControl.setErrors(error);

      return error;
    };
  }
}
