import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homecontent/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { NameListService } from './services/name-list/name-list.service';
import { RegisterService } from './services/homeregister/register.service';


import { HomeregComponent } from './homeregister/homereg.component';
@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule],
  declarations: [HomeComponent, HomeregComponent],
  exports: [HomeComponent, HomeregComponent],
  providers: [NameListService, RegisterService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class HomeModule { }
