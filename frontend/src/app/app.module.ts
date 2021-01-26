import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { DynamicFormComponent } from './stack/dynamic-form.component'
import { DynamicFormFieldComponent } from './stack/dynamic-form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
