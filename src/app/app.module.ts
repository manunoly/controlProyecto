import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatPaginator,
  MatTableModule,
  MatInputModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";

import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";

import { AppComponent } from "./app.component";

import { NuevoProyectoComponent } from "./nuevo-proyecto/nuevo-proyecto.component";
import { ListarProyectosComponent } from "./listar-proyectos/listar-proyectos.component";
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { AccionesComponent } from "./acciones/acciones.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "acciones",
    component: AccionesComponent
  },
  {
    path: "listar-proyectos",
    component: ListarProyectosComponent
  },
  {
    path: "nuevo-proyecto",
    component: NuevoProyectoComponent
  },
  {
    path: "proyecto/:id",
    component: ProyectoComponent
  },
  { path: "", redirectTo: "/listar-proyectos", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccionesComponent,
    NuevoProyectoComponent,
    ListarProyectosComponent,
    ProyectoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
