/* 
app.component.ts, es un componente, se crea por defecto en el proyecto

Los componentes estan formados por:
Una serie de imports, que son modulos u objetos, que debemos importar para poder utilizarlos 
  * Con import, importamos el modulo 'Component'
  * Con from, indicamos el paquete que esta guardado en el package.json, en el caso de 'Component' esta guardado en el core 
*/
import { Component } from '@angular/core';

/* 
@Component, es un decorador, en el decorador se configura el component
  * Con la propiedad selector, le puedo indicar con que etiqueta o directiva de la pagina se cargara este component
  * Con la propiedad templateUrl, podremos ver la vista del componente
  * Con la propiedad styleUrls, podremos agregar estilos CSS, por si queremos darle estilos al componente en especifico

export en la clase, sirve para poder utilizar esta clase en otros archivos 
Dentro de la clase definimos propiedades o funcionalidades que tendra la clase, en este caso tenemos una propiedad publica llamada 'title'
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular';
}
