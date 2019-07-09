import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getPrincipals() {
    return this.http.get('http://localhost:3000/');
  }
  getAll() {
    return this.http.get('http://localhost:3000/products');
  }
}
