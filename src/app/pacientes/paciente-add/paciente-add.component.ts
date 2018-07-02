import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.css']
})
export class PacienteAddComponent implements OnInit {

  constructor(private pacienteService: PacienteService, private toastr: ToastrService) { }

  ngOnInit() {
    this.pacienteService.getPacientes();
    this.resetForm();
  }

  onSubmit(pacienteForm: NgForm){
    if(pacienteForm.value.$key == null){
      this.pacienteService.insertPacientes(pacienteForm.value);
    }else{
      this.pacienteService.updatePacientes(pacienteForm.value);
    }
    this.resetForm(pacienteForm);
    this.toastr.success('Operación realizada con éxito', 'Product Registered');
  }

  resetForm(pacienteForm?: NgForm){
    if(pacienteForm != null)
      pacienteForm.reset();
      this.pacienteService.selectPaciente = new Paciente();
  }

}
