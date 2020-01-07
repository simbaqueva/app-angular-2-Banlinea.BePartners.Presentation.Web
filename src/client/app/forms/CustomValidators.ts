import { Directive, forwardRef, Attribute } from '@angular/core';
import {FormControl, Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

export default class CustomValidators {
  /**
   * sample from http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
   */
  static validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
    static validateDate(c: FormControl) {
    let DATE_REGEXP = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

    return DATE_REGEXP.test(c.value) ? null : {
      validateDate: {
        valid: false
      }
    };
  }
    static validateCard(c: FormControl) {
    let CARD_REGEXP = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    return  CARD_REGEXP.test(c.value) ? null : {
      validateCard: {
        valid: false
      }
    };
  }
}
@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
  ]
})
export class EqualValidator implements Validator {
  constructor( @Attribute('validateEqual') public validateEqual: string, @Attribute('reverse') public reverse: string) {}
  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true: false;
  }


  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    let v = c.value;

    // control value (e.g. password)
    let e = c.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value) return {
      validateEqual: false
    }
    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ validateEqual: false });
    }
    return null;
  }
}
