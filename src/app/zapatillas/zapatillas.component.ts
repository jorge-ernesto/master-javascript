import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla' //Importamos la clase del modelo Zapatilla

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
   
   public titulo    : string = "Componente de Zapatillas";
   public zapatillas: Array<Zapatilla>; //Esto sera un array de objetos de tipo Zapatilla
   public marcas    : String[]; //Esto sera un array de tipo String, todos los datos que habra dentro seran String
   public color     : string;
   public mi_marca  : string;

   constructor(){
      console.log("Se ha cargado el componente: zapatillas.component.ts");

      //Le damos valores al array                  
      this.zapatillas = [ //Zapatillas es igual a un array
         new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80 , true), //Aqui creamos el objeto, utilizando mi molde, utilizando mi clase
         new Zapatilla('Nike Runner MD' , 'Nike'   , 'Negras', 60 , true),
         new Zapatilla('Adidas Yezzy'   , 'Adidas' , 'Gris'  , 180, false),
         new Zapatilla('Nike Airmax'    , 'Nike'   , 'Rojas' , 190, true),
      ];
      this.marcas   = []; //this.marcas = new Array(); //Push no se puede utilizar en un objeto que esta 'undefined'
      this.color    = 'yellow';
      this.mi_marca = 'Marca';
   }

   ngOnInit(): void {
      console.log('zapatillas', this.zapatillas);            
      this.getMarcas();      
   }  

   /**
    * Metodo para recorrer de manera clasica con un foreach de Javascript
    * 
    * Metodo forEach, es de los nuevos estandares de ECMAScript 6 (ES6): 
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    * 
    * Metodo indexOf, sirve para localizar valores en un array: 
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    */
   public getMarcas(){             
      this.zapatillas.forEach((zapatilla, index) => { //Foreach en JavaScript         
         // console.log(zapatilla, index);
         if (this.marcas.indexOf(zapatilla.marca) < 0) { //Valida que en el array marcas no existan ya los valores por insertar para que no se repitan
            this.marcas.push(zapatilla.marca);
         }  
      });
      console.log('marcas', this.marcas);
   }

   public getMarca(){
      alert(this.mi_marca);
   }

   /**
    * Agregamos elemento a array usando metodo push
    * @url https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    */
   public addMarca(){
      this.marcas.push(this.mi_marca);
   }

   /**
    * Eliminamos elemento de array con su indice usando metodo splice
    * @url https://www.oscarlijo.com/blog/eliminar-elementos-de-un-array-en-javascript/    
    */
   public deleteMarca(indice){
      this.marcas.splice(indice, 1);
   }

   public onBlur(){
      console.log('Has salido del input');
   }

   public mostrarPalabra(){
      alert(this.mi_marca);
   }

}