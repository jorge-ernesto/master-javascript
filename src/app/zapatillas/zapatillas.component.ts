import { Component } from '@angular/core';

@Component({
   selector: 'zapatillas',
   templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
   
   public titulo: string = "Componente de zapatillas";

   constructor(){
      console.log("Se ha cargado el componente: zapatillas.component.ts");
   }

}