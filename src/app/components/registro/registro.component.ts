import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  usuario = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  ngOnInit(): void {
  }

}
