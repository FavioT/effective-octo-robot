import { Component, OnInit } from '@angular/core';
import { NodepgService } from '../../services/nodepg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [],
  template: `
    <form (ngSubmit)="onSubmit(registro)" #registro="ngForm" novalidate="">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="inputName" placeholder="Nombre" name="name" ngModel required>
      </div>
      <div class="form-group col-md-6">
        <label for="lastname">Apellido</label>
        <input type="text" class="form-control" id="inputLastname" placeholder="Apellido" name="lastname" ngModel required>
      </div>
    </div>
    <div class="form-group">
      <label for="doc">Documento</label>
      <input type="text" class="form-control" id="inputDoc" name="doc" ngModel required>
    </div>
    <div class="form-group">
      <label for="birthday">Fecha de nacimiento</label>
      <input type="text" class="form-control" id="inputBirthday" placeholder="AAAA-MM-DD" name="birthday" ngModel required>
    </div>

    <button type="submit" class="btn btn-primary">Registrarse</button>
  </form>
  `
})
export class RegisterComponent {

  data:any = [];

  constructor( private nodepg: NodepgService ) {
  }

  onSubmit( registro: any ) {
    this.nodepg.testQuery()
    .subscribe( res => {
      this.data = res;
      let founded = this.data.find(inf => {
        return parseInt(inf.documento) === parseInt(registro.form.value.doc);
      })

      if (founded) {
        this.nodepg.updateStudent( founded.identificador, registro.form.value.name, registro.form.value.lastname, registro.form.value.doc, registro.form.value.birthday )
        .subscribe(
          res => {
            console.log("Alumno actualizado correctamente");
          },
          err => {
            console.log("Error occured");
          }
        );
      } else {
        this.nodepg.registerStudent( this.data.length, registro.form.value.name, registro.form.value.lastname, registro.form.value.doc, registro.form.value.birthday )
        .subscribe(
          res => {
            console.log("Alumno creado correctamente");
          },
          err => {
            console.log("Error occured");
          }
        )
      }


    })

  }


}
