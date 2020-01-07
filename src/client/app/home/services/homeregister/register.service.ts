/* * * ./app/home/services/homeregister/register.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Register }           from '../../models/register';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService {
     // HTTP constructor
     constructor (private http: Http) {}
     // Variable de instancia privada para mantener la url de base
     private registersUrl = 'http://localhost:3000/registros';
    // private registersUrl = 'http://578f454de2fa491100415d08.mockapi.io/api/register';

     //Obtener todos los registros existentes
     getRegisters() : Observable<Register[]>{
         // ...usando get request
         return this.http.get(this.registersUrl)
         // ...llamando .json () a la respuesta y los datos de retorno
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     // Agregar un nuevo registro
    addRegister (body: Object): Observable<Register[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ...Establecer el tipo de contenido en JSON
        let options = new RequestOptions({ headers: headers }); // Crear una opción de solicitud

        return this.http.post(this.registersUrl, body, options) // ...usando post request
                         .map((res:Response) => res.json()) // ...Y llamando .json () a la respuesta y los datos de retorno
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...si hay Errores
    }



}
