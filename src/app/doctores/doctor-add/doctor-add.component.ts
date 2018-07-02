import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../../models/doctor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {

  constructor(private doctorService: DoctorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.doctorService.getDoctores();
    this.resetForm();
  }

  onSubmit(doctorForm: NgForm){
    if(doctorForm.value.$key == null){
      this.doctorService.insertDoctores(doctorForm.value);
    }else{
      this.doctorService.updateDoctores(doctorForm.value);
    }
    this.resetForm(doctorForm);
    this.toastr.success('Operación realizada con éxito', 'Product Registered');
  }

  resetForm(doctorForm?: NgForm){
    if(doctorForm != null)
      doctorForm.reset();
      this.doctorService.selecDoctor = new Doctor();
  }

}
