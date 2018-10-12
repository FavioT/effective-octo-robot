declare var require: any

import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const ip = require('../../../config/conn.js')

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NodepgService {

  constructor( public http: HttpClient ) {
  	console.log('Servicio NodePg listo')
  }

  testQuery() {
  	const url = 'http://' + ip.ip + ':4000';
    return this.http.get(url);
  }

  getId( id: number ) {
    const url = 'http://' + ip.ip + ':4000/getid/' + id;
    return this.http.get(url);
  }

  getAcademicInfo( idpersona: number ) {
    const url = 'http://' + ip.ip + ':4000/academicinfo/' + idpersona;
    return this.http.get(url);
  }

  registerStudent( name:string, lastname:string, doc:string, birthday:string ) {
    return this.http.post('http://' + ip.ip + ':4000/registerstudent', {
      name: name,
      doc: doc,
      lastname: lastname,
      birthday: birthday
    })

    /*return this.http.post('http://jsonplaceholder.typicode.com/posts', {
          title: 'foo',
          body: 'bar',
          userId: 1
        });*/
  }

  getClass( name:string ) {
    const url = 'http://' + ip.ip + ':4000/getclass/' + name;
    return this.http.get(url);
  }

}
