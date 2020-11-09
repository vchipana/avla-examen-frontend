import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario: any = {};
  
  constructor(
    private router: Router,
    private loginService: LoginService) {}
  
  clickIngresar() {
    this.loginService.login(this.usuario).subscribe(
      res => {
        if(res.usuarioID) {
          this.router.navigate(['tareas']);
        }
      }
    );
  }
}