import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NameListService } from '../services/name-list/name-list.service';
import { HomeregModule } from '../homeregister/homereg.module';


@NgModule({
  imports: [HomeRoutingModule, SharedModule, HomeregModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
