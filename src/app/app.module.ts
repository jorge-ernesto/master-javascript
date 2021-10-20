/*
Importamos los dos modulos o los dos objetos, que se encargan de hacer esto, que son el BrowserModule y el NgModule 
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Modulo para que funcione Two way data-binding en formulario
import { routing, appRoutingProviders } from './app.routing'; //Modulo de rutas

/*
Importamos los componentes
*/
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

/* 
NgModule, es el decorador, que nos permite configurar los modulos
  * Indicamos declarations, nos sirve para cargar nuestros componentes, nuestros pipes y nuestras directivas
  * Indicamos imports, nos sirve para cargar modulos que tenga el propio framework de Angular, modulos que hayamos instalados nosotros externos, o modulos que hayamos creado nosotros
  * Indicamos providers, nos sirve para cargar servicios
  * Indicamos bootstrap, que es el modulo principal o el componente principal que se va a cargar
*/
@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Una vez que tenemos el modulo importado, lo tenemos que cargar en los imports que es el array dentro de NgModule, que nos permite cargar modulos internos de Angular de modulos externos que hayamos cargados
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
