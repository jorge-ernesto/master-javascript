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

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    console.log("Se ha cargado el componente: externo.component.ts");
    this.userId = 1;
  }

  ngOnInit(): void {
    this.getUser(this.userId);
  }

  public getUser(userId) {
    this._peticionesService.getUser(userId).subscribe( //Un Obsersable siempre tiene un subscribe, para suscribirme y recoger el resultado que nos devuelve
      //El metodo subscribe tiene 2 funciones de callback
      result => { //Una que recoge el resultado
        console.log('result:', result);
        this.user = result.data;
        console.log('user:', this.user)
      },
      error => { //Otra que recoge el posible error
        console.log(<any>error); //Recogemos el error de cualquier error que haga
      }
    );
  }

}
