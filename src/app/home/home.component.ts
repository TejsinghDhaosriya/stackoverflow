import { Component, OnInit } from '@angular/core';

import { FormFieldService } from '../stack/classes/form-field.service';
import { FormFieldBase } from '../stack/classes/form-field-base'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  providers: [FormFieldService]
})
export class HomeComponent implements OnInit {
  fields$: Observable<FormFieldBase<any>[]>;

  constructor(private service: FormFieldService) {
   }

  ngOnInit(): void {
    this.fields$ = this.service.getFormFields();
  }
}
