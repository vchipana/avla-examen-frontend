import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TareasService } from './tareas.service';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  usuarios: any = [];
  tarea: any = {};
  tareas: any = [];
  
  modalRef: BsModalRef;
  
  constructor(
    private router: Router,
    private modalService: BsModalService,
    private tareasService: TareasService) {}
    
  ngOnInit() {
    this.obtenerUsuarios();
    this.obtenerTareas();
  }
  
  obtenerUsuarios() {
    this.tareasService.obtenerUsuarios().subscribe(
      res => {
        this.usuarios = res
      }
    );
  }
  
  crearTarea() {
    this.tareasService.crearTarea(this.tarea).subscribe(
      res => {
        this.obtenerTareas();
      }
    );
  }
  
  obtenerTareas() {
    this.tareasService.obtenerTareas().subscribe(
      res => {
        this.tareas = res;
      }
    );
  }
  
  eliminarTarea() {
    this.tareasService.eliminarTarea(this.tarea.tareaID).subscribe(
      res => {
        this.obtenerTareas();
      }
    );
  }
  
  clickRegresar() {
    this.router.navigate(['login']);
  }
  
  openModal(template: TemplateRef<any>, tamanio?) {
    this.modalRef = this.modalService.show(template, {class: tamanio});
  }
}