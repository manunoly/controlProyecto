import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatChipInputEvent } from "@angular/material";
import { ENTER, COMMA } from "@angular/cdk/keycodes";

@Component({
  selector: "app-nuevo-proyecto",
  templateUrl: "./nuevo-proyecto.component.html",
  styleUrls: ["./nuevo-proyecto.component.css"]
})
export class NuevoProyectoComponent implements OnInit {
  proyectoForm: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  estados = [
    { value: "propuesto", mostrar: "Propuesto" },
    { value: "iniciado", mostrar: "Iniciado" },
    { value: "ejecucion", mostrar: "Ejecución" }
  ];
  lineas = [
    { value: "edificaciones", mostrar: "Edificaciones" },
    { value: "alumbrado", mostrar: "Alumbrado" },
    { value: "transporte", mostrar: "Transporte" }
  ];
  regiones = [
    { value: "nacional", mostrar: "Nacional" },
    { value: "pichinca", mostrar: "Pichinca" },
    { value: "quito", mostrar: "Quito" }
  ];
  estadoProyecto = "propuesto";
  anno = 2018;
  nombreProyecto = "nuevo";
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm() {
    this.proyectoForm = this.fb.group({
      nombre: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      anno: [
        "2017",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.min(2010),
          Validators.max(2020)
        ])
      ],
      estado: ["", Validators.compose([Validators.required])],
      linea: ["", Validators.compose([Validators.required])],
      objetivoGral: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      objetivoEspecificos: ["", Validators.compose([])],
      presupuesto: ["", Validators.compose([Validators.required])],
      primerAnno: ["", Validators.compose([])],
      duracion: ["", Validators.compose([Validators.required])],
      region: ["", Validators.compose([Validators.required])],
      productos: ["", Validators.compose([])]
    });
  }
  guardar() {
    console.log("submit");
    let a =JSON.stringify(this.proyectoForm.value);
    console.log(a);
  }
}
