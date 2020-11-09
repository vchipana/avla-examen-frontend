import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario: any = {};
  
  modalRef: BsModalRef;
  
  @ViewChild('templateUsuarioNoEncontrado', { static: true }) public templateUsuarioNoEncontrado: TemplateRef<any>;
  @ViewChild('templateUsuarioNoDatos', { static: true }) public templateUsuarioNoDatos: TemplateRef<any>;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    private modalService: BsModalService) {}
  
  clickIngresar() {
    if(!this.usuario.username || !this.usuario.password) {
      this.openModal(this.templateUsuarioNoDatos, 'modal-sm');
    } else {    
      this.loginService.login(this.usuario).subscribe(
        res => {
          if(res.usuarioID) {
            this.router.navigate(['tareas']);
          } else {
            this.openModal(this.templateUsuarioNoEncontrado, 'modal-sm');
          }
        }
      );
    }
  }
  
  openModal(template: TemplateRef<any>, tamanio?) {
    this.modalRef = this.modalService.show(template, {class: tamanio});
  }
}