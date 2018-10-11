import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NodepgService {

  constructor( public http: HttpClient ) {
  	console.log('Servicio NodePg listo')
  }

  testQuery() {
  	const url = 'http://localhost:4000/'; 

    return this.http.get(url);
  }
}
