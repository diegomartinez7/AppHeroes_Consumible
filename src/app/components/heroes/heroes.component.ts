import { Component, OnInit, OnChanges } from '@angular/core';
import { HeroService } from '../../services/Hero.services';
import { Router } from '@angular/router';

//Decorador
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges {

  constructor(private _heroService: HeroService, private _arouter: Router) { }

  ArrayHeroes: object[] = []

  ngOnInit(): void {
    this._heroService.getHeroes().subscribe((data: any) => {
      this.ArrayHeroes = data;
      console.log(data);
    });
  }

  ngOnChanges() {
    console.log("Evento ngOnInit");
  }

  Navegar(index){
    console.log(index);
    this._arouter.navigate(['/hero',index]);
  }

  Eliminar(id){
    console.log(id);
    this._heroService.eliminarHero(id).subscribe(data => {
      console.log(data);
    });
    this._arouter.navigate(['']);
  }

}
