import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  Nombre = 'Christopher Diego Martínez Bernal';
  NombreAlterno = 'cHriStopHER DIego MaRtÍnEz BeRnAL'
  VideoUrl = 'https://www.youtube.com/embed/SfaLYO-lebQ';
  ArrayPrueba = ['A','B','C','D','E','F','G','H','I','J','K'];
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;
  Cambio = true;

  constructor() { }

  ngOnInit(): void {
  }

}
