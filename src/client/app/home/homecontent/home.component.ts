import { Component, OnInit } from '@angular/core';
import { NameListService } from '../services/name-list/name-list.service';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

/**
 * Esta clase representa la Home HomeComponent
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

/**
 *Se exporta la clase con implementacion de la funcion OnInit
 */
export class HomeComponent implements OnInit {
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  giphies = <any>[];

  /**
   * Creamos una instancia de el HomeComponent y le inyectamos melistService
   * @param {NameListService} -  NameListService inyectado y Http.
   */
  constructor(public nameListService: NameListService, http: Http) {
    this.http = http;
  }
performSearch(searchTerm: HTMLInputElement): void {
  var apiLink = this.link + searchTerm.value;
  this.http.get(apiLink)
  .subscribe((res: Response) => {
   this.giphies = res.json().data;
   console.log(this.giphies); });
}
  /**
   * rSe resive la respuesta y se muestra en OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * se procesa el Observable namelistService
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * se agrega un nuevo item al a la respuesta
   * @return {boolean} false para evitar que el comportamiento predeterminado de presentación de formulario actualice la página..
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
