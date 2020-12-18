import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService, private _router: Router) { }

  Resultados: any = [];
  strTermino = '';

  ngOnInit(): void {
    this._aRoute.params.subscribe( params => {
      this.strTermino = params['termino'];
      this._heroService.searchHeroes(params['termino']).subscribe((data: any) => {
        this.Resultados = data;
      });
      console.log(this.Resultados);
    });
  }

  Navegar_Res(index){
    this._router.navigate(['/hero',index]);
  }

  Eliminar(id){
    console.log(id);
    this._heroService.eliminarHero(id).subscribe(data => {
      console.log(data);
    });
  }
}
