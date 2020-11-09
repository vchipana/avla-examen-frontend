import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TareasService {
  
  constructor(
    private httpClient: HttpClient) {}
    
  obtenerUsuarios(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/usuarios');
  }
  
  crearTarea(params): Observable<any> {
    return this.httpClient.post('http://localhost:3000/tarea', params);
  } 
  
}