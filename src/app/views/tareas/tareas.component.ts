import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  
  modalRef: BsModalRef;
  
  constructor(
    private router: Router,
    private modalService: BsModalService) {}
  
  clickRegresar() {
    this.router.navigate(['login']);
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}