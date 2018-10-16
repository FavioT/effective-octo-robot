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

  registerStudent( id:number, name:string, lastname:string, doc:string, birthday:string ) {
    return this.http.post('http://' + ip.ip + ':4000/registerstudent', {
      id: id,
      name: name,
      doc: doc,
      lastname: lastname,
      birthday: birthday
    })
  }

  getClass( name:string ) {
    const url = 'http://' + ip.ip + ':4000/getclass/' + name;
    return this.http.get(url);
  }

  updateStudent( id:number, name:string, lastname:string, doc:string, birthday:string ) {
    return this.http.post('http://' + ip.ip + ':4000/update', {
      id: id,
      name: name,
      doc: doc,
      lastname: lastname,
      birthday: birthday
    })
  }

  inscription( id:number, name:string) {
    return this.http.post('http://' + ip.ip + ':4000/inscription', {
      id: id,
      name: name
    })
  }
}
