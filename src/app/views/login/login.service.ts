import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  
  constructor(
    private httpClient: HttpClient) {}
    
  login(params: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', params);
  }
  
}