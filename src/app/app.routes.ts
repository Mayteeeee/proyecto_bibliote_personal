import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { RegistroComponent } from './pantallas/registro/registro';
import { PanelprincipalComponent } from './pantallas/panelprincipal/panelprincipal';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { VerificacionComponent } from './pantallas/verificacion/verificacion';
import { NuevacontraComponent } from './pantallas/nuevacontra/nuevacontra';
import { PrestamosComponent } from './pantallas/prestamos/prestamos'; 
import { ConfiguracionComponent } from './pantallas/configuracion/configuracion'; 
import { DetalleLibroComponent } from './pantallas/detalleslibro/detalleslibro';
import { Agregareditar } from './pantallas/agregareditar/agregareditar';
import { Mislibros } from './pantallas/mislibros/mislibros';

export const routes: Routes = [
  // Ruta vacía: lo primero que se abrirá en tu navegador será la pantalla de inicio
  { path: '', component: Inicio }, 
  
  // Ruta para ir al Login cuando le des clic a "Comenzar"
  { path: 'login', component: LoginComponent },

  { path: 'registro', component: RegistroComponent },

  { path: 'panelprincipal', component: PanelprincipalComponent },
  
  // Ruta para la recuperación de contraseña
  { path: 'recuperacion', component: Recuperacion },
  
  // Pantalla de verificación
  { path: 'verificacion', component: VerificacionComponent },

  // Tu nueva pantalla lila de contraseña
  { path: 'nuevacontra', component: NuevacontraComponent },
  
  // Pantalla de detalles de libros
  { path: 'detalleslibro', component: DetalleLibroComponent },
  
  { path: 'agregareditar', component: Agregareditar },

  // PANTALLA DE MAYTE AÑADIDA:
  { path: 'mislibros', component: Mislibros },

  // Tu pantalla de préstamos conectada
  { path: 'prestamos', component: PrestamosComponent },

  // Tu pantalla de configuración completa
  { path: 'configuracion', component: ConfiguracionComponent },

  // Comodín por si escriben cualquier otra ruta rota en el navegador, te manda a inicio
  { path: '**', redirectTo: '' }
];