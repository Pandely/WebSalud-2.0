import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacienteList: Paciente[];

  constructor(private pacienteService: PacienteService,private toastr: ToastrService) { }

  ngOnInit() {
    return this.pacienteService.getPacientes()
    .snapshotChanges().subscribe(item=>{
      this.pacienteList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.pacienteList.push(x as Paciente);
      });
    });
  }

  onEdit(paciente: Paciente) {
    this.pacienteService.selectPaciente = Object.assign({}, paciente);
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Paciente?')) {
      this.pacienteService.deletePacientes($key);
      this.toastr.warning('Registro eliminado correctamente...', 'Product Removed');
    }
  }

}
