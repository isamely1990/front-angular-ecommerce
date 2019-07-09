import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../services/productos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos;
  destacados;
  constructor(private product: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    console.log('toy mostrando todos los products');
    this.product.getAll().subscribe(data =>
      this.productos = data);
  }

  showPrincipals() {
    console.log('toy mostranto solo 2 prod');
    this.product.getPrincipals().subscribe(data =>
      this.productos = data);
  }

}
