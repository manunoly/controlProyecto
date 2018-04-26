import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';

import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AccionesComponent } from './acciones/acciones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { PageNotFoundComponent }   from './not-found.component';

// import { CanDeactivateGuard }      from './can-deactivate-guard.service';
// import { AuthGuard }               from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'acciones',
    component: AccionesComponent
  }, {
    path: 'listar-proyectos',
    component: ListarProyectosComponent
  }, {
    path: 'nuevo-proyecto',
    component: NuevoProyectoComponent
  }, {
    path: 'proyecto/:id',
    component: ProyectoComponent
  },
  /* ,{
    path: 'nuevo-proyecto',
    component: NuevoProyectoComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
  }, */
  { path: '',   redirectTo: '/listar-proyectos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
