import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { VerificacionComponent } from './pantallas/verificacion/verificacion';
import { NuevacontraComponent } from './pantallas/nuevacontra/nuevacontra';
import { PrestamosComponent } from './pantallas/prestamos/prestamos'; 
import { ConfiguracionComponent } from './pantallas/configuracion/configuracion'; 

export const routes: Routes = [
  // Ruta vacía: lo primero que se abrirá en tu navegador será la pantalla de inicio
  { path: '', component: Inicio }, 
  
  // Ruta para ir al Login cuando le des clic a "Comenzar"
  { path: 'login', component: LoginComponent },
  
  // Ruta para la recuperación de contraseña
  { path: 'recuperacion', component: Recuperacion },
  
  // Ruta para la pantalla de verificación
  { path: 'verificacion', component: VerificacionComponent },

  // Tu nueva pantalla lila de contraseña
  { path: 'nuevacontra', component: NuevacontraComponent },

  // Tu pantalla de préstamos conectada
  { path: 'prestamos', component: PrestamosComponent },

  // CAMBIADO A 'configuracion' PARA QUE ABRA EN TU URL DIRECTAMENTE:
  { path: 'configuracion', component: ConfiguracionComponent },

  // Comodín por si escriben cualquier otra ruta rota en el navegador, te manda a inicio
  { path: '**', redirectTo: '' }
];