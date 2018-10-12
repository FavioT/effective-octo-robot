import { Component, OnInit } from '@angular/core';
import { NodepgService } from '../../services/nodepg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {

  constructor( private nodepg: NodepgService ) {
  	this.nodepg.testQuery()
      .subscribe( data => {

      })
  }



}
