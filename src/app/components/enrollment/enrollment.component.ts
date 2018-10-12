import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: [],
  template: `<form>
  <div class="form-group">
    <label for="legajo">Legajo</label>
    <input type="text" class="form-control" id="legajo" placeholder="Ingrese su legajo">
  </div>
  <div class="form-group">
    <label for="materia">Materia</label>
    <input type="text" class="form-control" id="materia" placeholder="Ingrese materia">
  </div>
  <button type="submit" class="btn btn-primary">Registrarse</button>
</form>`

})
export class EnrollmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBlurMethod(){
    console.log('method');
  }

}
