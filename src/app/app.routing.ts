// Importar los modulos del Router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

// Importar componentes
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

// Array de rutas
const appRoutes: Routes = [
   {path: ''                         , component: HomeComponent},
   {path: 'home'                     , component: HomeComponent}, //Es recomendable crear una ruta alternativa para el home, esta es la ruta que se utilizaria para que funcione bien la directiva routerLinkActive
   {path: 'videojuego'               , component: VideojuegoComponent},
   {path: 'zapatillas'               , component: ZapatillasComponent},
   {path: 'cursos'                   , component: CursosComponent},
   {path: 'cursos/:nombre'           , component: CursosComponent},
   {path: 'cursos/:nombre/:followers', component: CursosComponent},
   {path: '**'                       , component: HomeComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
