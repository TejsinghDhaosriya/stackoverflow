import { Component } from '@angular/core';

import { FormFieldService } from './stack/form-field.service';
import { FormFieldBase } from './stack/form-field-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [FormFieldService]
})
export class AppComponent {
  title = 'STACKOVERFLOW';

  fields$: Observable<FormFieldBase<any>[]>;

  constructor(service: FormFieldService) {
    this.fields$ = service.getFormFields();
  }
}
