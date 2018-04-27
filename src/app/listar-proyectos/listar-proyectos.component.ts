import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-listar-proyectos",
  templateUrl: "./listar-proyectos.component.html",
  styleUrls: ["./listar-proyectos.component.css"]
})
export class ListarProyectosComponent implements OnInit {
  title = "Listar Proyectos";
  displayedColumns = [
    "nombre",
    "anno",
    "estado",
    "linea",
    "objetivoGral",
    "objetivoEspecificos",
    "presupuesto",
    "primerAnno",
    "duracion",
    "region",
    "productos"
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    const users: UserData[] = [];
    for (let i = 1; i <= 30; i++) {
      users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([
      {
        id: 1,
        nombre: "Proyecto 1",
        anno: "2018",
        estado: "propuesto",
        linea: "edificaciones",
        objetivoGral: "objetivo 1\nobjetivo2",
        objetivoEspecificos: "",
        presupuesto: 12,
        primerAnno: 12,
        duracion: 12,
        region: "Quito, Galapagos",
        productos: "12"
      },
      {
        id: 2,
        nombre: "Proyecto 2",
        anno: "2017",
        estado: "propuesto",
        linea: "edificaciones",
        objetivoGral: "objetivo 1\nobjetivo2",
        objetivoEspecificos: "",
        presupuesto: 12,
        primerAnno: 12,
        duracion: 12,
        region: "Quito, Galapagos",
        productos: "12"
      }
    ]);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  detalles(id) {
    console.log(id);
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    " " +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    ".";

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

const COLORS = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray"
];
const NAMES = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth"
];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
