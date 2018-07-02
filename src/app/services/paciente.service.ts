import { Injectable } from '@angular/core';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacientesList: AngularFireList<any>;
  selectPaciente: Paciente = new Paciente();

  constructor(private firebase: AngularFireDatabase) { }

  getPacientes(){
    return this.pacientesList=this.firebase.list('pacientes');
  }

  insertPacientes(paciente: Paciente){
    this.pacientesList.push(
      {
        codigo: paciente.codigo,
        nombre: paciente.nombre,
        email: paciente.email,
        diagnostico: paciente.diagnostico,
        estadia: paciente.estadia,
        tipo: paciente.tipo,
      });
  }

  updatePacientes(paciente:Paciente){
    this.pacientesList.update(paciente.$Key,{
        codigo: paciente.codigo,
        nombre: paciente.nombre,
        email: paciente.email,
        diagnostico: paciente.diagnostico,
        estadia: paciente.estadia,
        tipo: paciente.tipo,
    })
  }

  deletePacientes($Key: string){
    this.pacientesList.remove($Key);
  }
}
