import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  estados = [
    {value: 'propuesto', mostrar: 'Propuesto'},
    {value: 'iniciado', mostrar: 'Iniciado'},
    {value: 'ejecucion', mostrar: 'Ejecución'}
  ];
  lineas = [
    {value: 'edificaciones', mostrar: 'Edificaciones'},
    {value: 'alumbrado', mostrar: 'Alumbrado'},
    {value: 'transporte', mostrar: 'Transporte'}
  ];
  estadoProyecto = "propuesto";
  anno = 2018;
  constructor() { }

  ngOnInit() {
  }

}
