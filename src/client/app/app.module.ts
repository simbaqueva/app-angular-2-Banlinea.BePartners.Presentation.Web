import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2Webstorage} from 'ng2-webstorage';
import { EqualValidator } from './forms/CustomValidators';

import { AboutModule } from './about/about.module';
import { RegisterModule } from './register/register.module';
import { GithubModule } from './github/github.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AboutModule,
    RegisterModule,
    GithubModule,
    Ng2Webstorage,
    SharedModule.forRoot()],
  declarations: [
    AppComponent,
    EqualValidator
  ],
  providers: [
    GithubService,
        {
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>',
        }
    ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
