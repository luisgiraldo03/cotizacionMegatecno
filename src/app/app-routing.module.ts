import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionListComponent } from './components/cotizacion-list/cotizacion-list.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';

const routes: Routes = [
  { path: '', redirectTo: "/cotizacion", pathMatch: 'full' },
  {path: 'cotizacion', component: CotizacionComponent},
  {path: 'cotizacion-list',component: CotizacionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
