

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldBase } from './classes/form-field-base'

@Component({
  selector: 'app-form-field',
  templateUrl: './stack-form-field.component.html'
})
export class StackFormFieldComponent  {
  @Input() field: FormFieldBase<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

}
