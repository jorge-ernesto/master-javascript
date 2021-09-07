/*
Hooks / Eventos ciclo de vida:
  OnInit:
    * Ya sabemos lo basico de los componentes, ahora veremos los 'Hooks' de los componentes o los 'eventos del ciclo de vida' de los componentes
    * Uno de los hooks mas importante es el 'OnInit', este componente lo tiene, ya que fue autogenerado por Angular CLI
  DoCheck:
    * El metodo o hook DoCheck, se ejecuta cada vez que se produce un cambio en el componente o en la aplicacion de Angular
    * Es un metodo que se va a estar ejecutando frecuentemente cada vez que suceda algo de esto
  OnDestroy:
    * El metodo o hook OnDestroy, nos servira para que se ejecute algo antes de eliminar la instancia de un componente
*/
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

/* Hook 'OnInit' y 'DoCkeck'
  * Se implementa en la clase ya que es una interfaz y nos permite utilizar el metodo 'ngOnInit' dentro de la clase
*/
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string = 'Componente de Cursos';

  constructor() { 
    //console.log("Se ha cargado el componente: cursos.component.ts");
  }

  /* Metodo 'ngOnInit'
    * Se ejecutara este metodo cada que se cargue el component
  */
  ngOnInit(): void {
    //console.log('ngOnInit de cursos.component.ts ejecutado');
  }

  /* Metodo 'ngDoCheck'
    * Se ejecutara cuando se realiza un cambio en el codigo
  */
  ngDoCheck(): void {
    //console.log('ngDoCheck de cursos.component.ts ejecutado');
  }

  /* Metodo 'ngOnDetroy'
    * Se ejecutara cuando se destruye un componente dentro del ciclo de vida
  */
  ngOnDestroy(): void {
    //console.log('ngOnDestroy de cursos.component.ts ejecutado')
  }

  cambiarTitulo() {
    this.titulo = 'Nuevo titulo del componente Cursos';
  }

}
