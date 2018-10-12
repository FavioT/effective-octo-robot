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
}
