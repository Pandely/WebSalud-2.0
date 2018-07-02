import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Doctor } from '../models/doctor';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctoresList: AngularFireList<any>;
  selecDoctor: Doctor = new Doctor();

  constructor(private firebase: AngularFireDatabase) { }

  getDoctores(){
    return this.doctoresList=this.firebase.list('doctores');
  }

  insertDoctores(doctor: Doctor){
    this.doctoresList.push(
      {
        codigo: doctor.codigo,
        nombre: doctor.nombre,
        email: doctor.email,
        horas: doctor.horas,
        especialidad: doctor.especialidad,
        area: doctor.area,
      });
  }

  updateDoctores(doctor: Doctor){
    this.doctoresList.update(doctor.$Key,{
        codigo: doctor.codigo,
        nombre: doctor.nombre,
        email: doctor.email,
        horas: doctor.horas,
        especialidad: doctor.especialidad,
        area: doctor.area,
    });
  }

  deleteDoctores($Key: string){
    this.doctoresList.remove($Key);
  }
}
