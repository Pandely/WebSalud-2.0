import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  private persona = [
    {
      cargo: "Director General",
      nombre: "Jorge Enrique"
    },
    {
      cargo: "Sub-Director General",
      nombre: "Pepe Vazquez"
    }, 
    {
      cargo: "Secretaria General",
      nombre: "Carla Flores"
    }  
  ]

  constructor() { }

  ngOnInit() {
  }

}
