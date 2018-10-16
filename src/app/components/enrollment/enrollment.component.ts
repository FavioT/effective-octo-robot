import { Component, OnInit } from '@angular/core';
import { NodepgService } from '../../services/nodepg.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: [],
  template: `
  <form (ngSubmit)="onSubmit(inscripcion)" #inscripcion="ngForm" novalidate="">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Legajo</label>
      <input type="text" class="form-control" id="inputName" placeholder="11009" name="name" ngModel required>
    </div>
    <div class="form-group col-md-6">
      <label for="lastname">Curso</label>
      <input type="text" class="form-control" id="inputCourse" placeholder="Dibujo" name="course" ngModel required>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Registrarse</button>
</form>
`

})
export class EnrollmentComponent{

  constructor( private nodepg: NodepgService ) {
  }

  onSubmit( inscripcion:any ){
    this.nodepg.inscription( inscripcion.form.value.name, inscripcion.form.value.course )
    .subscribe(
      res => {
        console.log("Alumno inscripto correctamente");
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
