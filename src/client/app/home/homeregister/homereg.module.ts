import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, JsonpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule,FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule,FormControl } from '@angular/forms';

import { HomeregComponent } from './homereg.component';
import { RegisterService } from '../services/homeregister/register.service';
import { EqualValidator } from '../../forms/CustomValidators';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    FormGroup,
    FormBuilder,
    Validators,
    BrowserModule,
    FormArray,
    FormControl
  ],
  declarations: [HomeregComponent, EqualValidator],
  exports: [HomeregComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    Http,
    RegisterService
  ],
})
export class HomeregModule { }
