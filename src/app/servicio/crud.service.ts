import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './Estudiante';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API : string = "http://localhost/estudiantes/";

  constructor( private clienteHttp : HttpClient) { }

  agregarEstudiante( datosEstudiante : Estudiante ) : Observable <any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosEstudiante);
  }

  obtenerEstudiantes(){
    return this.clienteHttp.get (this.API);
  }

  borrarEstudiante(id : any ): Observable <any>{
    return this.clienteHttp.get( this.API + "?borrar=" + id);
  }

  obtenerEstudiante (id : any ): Observable <any> {
    return this.clienteHttp.get( this.API + "?consultar=" + id);
  }

  editarEstudiante( id: any, datosEstudiante : Estudiante) :Observable <any>{
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosEstudiante)
  }
}
