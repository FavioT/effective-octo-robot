import { Component, OnInit } from '@angular/core';
import { NodepgService } from '../../services/nodepg.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: [],
  template: `
  <h5>Ingrese su legajo</h5>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Legajo</span>
    </div>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" [(ngModel)]="legajo" (blur)="onBlurMethod()">
  </div>
  <hr>
  <h5>Estado Académico</h5>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Profesor</th>
      <th scope="col">Nota</th>
      <th scope="col">Carrera</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of info">
      <th scope="row">{{ item.idalumno }}</th>
      <td>{{ item.nombre }}</td>
      <td>{{ item.descripcion }}</td>
      <td>{{ item.profesor }}</td>
      <td>{{ item.nota }}</td>
      <td>{{ item.carrera }}</td>
    </tr>
  </tbody>
</table>
<h5>Promedio del alumno: {{ promedio }}</h5>
<hr>
<h5>Ingrese clase</h5>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Clase</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" [(ngModel)]="nombre" (blur)="onBlurClass()">
</div>
<h5>Información de clase</h5>
<table class="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Clase</th>
    <th scope="col">Profesor</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="let item of clase">
    <th scope="row">{{ item.idalumno }}</th>
    <td>{{ item.nombre }}</td>
    <td>{{ item.apellido }}</td>
    <td>{{ item.clase }}</td>
    <td>{{ item.profesor }}</td>
  </tr>
</tbody>
</table>

  `
})
export class ReportsComponent {

  legajo:any;
  id:number;
  info:any;
  clase:any;
  promedio:number;
  nombre:string;

  constructor( private nodepg: NodepgService ) {
    this.legajo = '';
  }

  onBlurMethod() {
     if (this.legajo !== '') {
       this.nodepg.getId( this.legajo )
         .subscribe( data => {
           this.id = data[0].idpersona;
           if (this.id !== undefined )
             this.nodepg.getAcademicInfo( this. id )
             .subscribe( info => {
               this.info = info || [];
               let suma = 0;
               this.info.forEach(function(item){
                  suma += item.nota;
               });
               this.promedio = suma / this.info.length;

             })
         })
     }
  }

  onBlurClass() {
    if (this.nombre !== '') {
      this.nodepg.getClass( this.nombre.toLowerCase() )
        .subscribe( clase => {
          this.clase = clase;
        })
    }
  }
}
