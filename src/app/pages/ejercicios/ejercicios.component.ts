import { Component, OnInit } from '@angular/core';
import { PeppaPigService } from '../../services/peppa-pig.service';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {
  nombre_persona: string;
  habilitado = true;
  numero: number;
  myNum = 5;
  mensaje: string;
  count = 1;
  adivina = true;

  /*****************/
  result;
  num1;
  num2;


  constructor(public peppa: PeppaPigService) { }

  ngOnInit() {
  }

  cambiar_nombre() {
    this.habilitado = false;
  }

  adivinar() {
    const intentos = this.count++;

    if (this.numero > this.myNum) {
      this.mensaje = 'el numero ingresado es mayor';
    } else if (this.numero < this.myNum) {
      this.mensaje = 'el numero ingresado es menor';
    } else if (this.numero === this.myNum) {
      this.mensaje = 'Adivinaste!!';
    }

    if (intentos === 5) {
      this.mensaje = 'fallaste :( ';
      this.adivina = false;
    }
  }

  sumar() {
    this.result = this.num1 + this.num2;
    console.log(this.result);
    const otraVariable = this.peppa.getList();
    console.log(otraVariable);
  }

  restar() {
    this.result = this.num1 - this.num2;
  }


}
