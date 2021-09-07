import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla' //Importamos la clase del modelo Zapatilla

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
   
   public titulo: string = "Componente de zapatillas";
   public zapatillas: Array<Zapatilla>; //Esto sera un array de objetos de tipo Zapatilla

   constructor(){
      console.log("Se ha cargado el componente: zapatillas.component.ts");

      //Le damos valores al array
      this.zapatillas = [ //Zapatillas es igual a un array
         new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true), //Aqui creamos el objeto, utilizando mi molde, utilizando mi clase
         new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
         new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
         new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 190, true),
      ]
   }

   ngOnInit(): void {
      console.log('zapatillas', this.zapatillas);      
   }  

}