import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//root
@Injectable({providedIn: 'root'})

export class HeroService {
    constructor(private http: HttpClient){
        console.log('HeroServiceWorks');
    }

    consultar(query: string){
      const url = `http://localhost:3000/${query}`;
      return this.http.get(url);
    }

    public getHeroes(){
        return this.consultar('heroesAct');
    }

    public getHero(id){
        return this.consultar(`heroe/${id}`);
    }

    public searchHeroes(termino){
      console.log(termino);
      return this.consultar(`heroesTerm?termino=${termino}`);
    }

    public eliminarHero(id){
      return this.http.delete(`http://localhost:3000/heroe/${id}`);
    }
}