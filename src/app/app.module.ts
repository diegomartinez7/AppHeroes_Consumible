import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

//Rutas
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { DomSeguroPipe } from './pipes/domseguro/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';

//Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    NotfoundComponent,
    HeroComponent,
    BuscadorComponent,
    CapitalizadoPipe,
    PipesComponent,
    DomSeguroPipe,
    PasswordPipe,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'about', component: AboutComponent},
      //Gracias a /:parámetro nuestra ruta se prepara para recibir un parámetro o un valor
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
