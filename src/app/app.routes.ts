import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { RegistroComponent } from './pantallas/registro/registro';
import { PanelprincipalComponent } from './pantallas/panelprincipal/panelprincipal';
import { PrestamosComponent } from './pantallas/prestamos/prestamos';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { VerificacionComponent } from './pantallas/verificacion/verificacion';
import { NuevacontraComponent } from './pantallas/nuevacontra/nuevacontra';
import { PrestamosComponent } from './pantallas/prestamos/prestamos'; 
import { ConfiguracionComponent } from './pantallas/configuracion/configuracion'; 
import { DetalleLibroComponent } from './pantallas/detalleslibro/detalleslibro';
import { Agregareditar } from './pantallas/agregareditar/agregareditar';
import { Mislibros } from './pantallas/mislibros/mislibros';
import { Registrarlibro } from './pantallas/registrarlibro/registrarlibro';

export const routes: Routes = [

  { path: '', component: Inicio }, 
  
  { path: 'login', component: LoginComponent },

  { path: 'registro', component: RegistroComponent },

  { path: 'panelprincipal', component: PanelprincipalComponent },

  { path: 'prestamos', component: PrestamosComponent},
  
  { path: 'recuperacion', component: Recuperacion },
  
  { path: 'verificacion', component: VerificacionComponent },

  { path: 'nuevacontra', component: NuevacontraComponent },
  
  { path: 'detalleslibro', component: DetalleLibroComponent },
  
  { path: 'agregareditar', component: Agregareditar },

  { path: 'mislibros', component: Mislibros },

  { path: 'prestamos', component: PrestamosComponent },

  { path: 'configuracion', component: ConfiguracionComponent },

  { path: 'registrarlibro', component: Registrarlibro },

  { path: '**', redirectTo: '' }
];