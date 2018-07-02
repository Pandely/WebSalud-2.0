import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../../models/doctor';
import { element } from 'protractor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorList: Doctor[];
  
  constructor(private doctorService:DoctorService,private toastr: ToastrService) { }

  ngOnInit() {
    return this.doctorService.getDoctores()
    .snapshotChanges().subscribe(item=>{
      this.doctorList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.doctorList.push(x as Doctor);
      });
    });
  }

  onEdit(doctor: Doctor) {
    this.doctorService.selecDoctor = Object.assign({}, doctor);
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Doctor?')) {
      this.doctorService.deleteDoctores($key);
      this.toastr.warning('Registro eliminado correctamente...', 'Product Removed');
    }
  }

}
