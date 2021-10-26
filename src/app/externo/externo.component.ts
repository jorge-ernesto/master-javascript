import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user  : Array<any>;
  public userId: number;
  public fecha : any; 

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    console.log("Se ha cargado el componente: externo.component.ts");
    this.userId = 1;
    this.fecha  = new Date(2019, 5, 20);
  }

  ngOnInit(): void {
    this.getUser(this.userId);
  }

  public getUser(userId) {
    this.user = null; //De este modo siempre cargara el mensaje 'Cargando...'
    this._peticionesService.getUser(userId).subscribe( //Un Obsersable siempre tiene un subscribe, para suscribirme y recoger el resultado que nos devuelve
      //El metodo subscribe tiene 2 funciones de callback
      result => { //Una que recoge el resultado
        console.log('result:', result);
        this.user = result.data;
        console.log('user:', this.user)
      },
      error => { //Otra que recoge el posible error
        this.user = null;
        console.log(<any>error); //Recogemos el error de cualquier error que haga
      }
    );
    console.log('Esto puede ejecutarse primero, demostrando que una peticion AJAX es asincrona');
  }

}
