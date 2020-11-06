import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  
  constructor(
    private router: Router) {}
  
  clickRegresar() {
    this.router.navigate(['login']);
  }
}