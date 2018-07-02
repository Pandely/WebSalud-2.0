import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { OrganoComponent } from './organo/organo.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteListComponent } from './pacientes/paciente-list/paciente-list.component';
import { PacienteAddComponent } from './pacientes/paciente-add/paciente-add.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { DoctorAddComponent } from './doctores/doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctores/doctor-list/doctor-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'institucional', component: InstitucionalComponent },
  { path: 'institucional', component: InstitucionalComponent},
    {path: 'institucional/mision-y-vision', component: MisionvisionComponent}, 
    {path: 'institucional/objetivos', component: ObjetivosComponent},
    {path: 'institucional/ubicacion', component: UbicacionComponent},
    {path: 'institucional/historia', component: HistoriaComponent},
    {path: 'institucional/creacion', component: CreacionComponent},
    {path: 'institucional/estructura', component: EstructuraComponent},
    {path: 'institucional/marco-legal', component: MarcolegalComponent},
    {path: 'directorio', component: DirectorioComponent },
    {path: 'directorio/redes-de-salud', component: DirectorioComponent}, 
    {path: 'organo', component: OrganoComponent },
    {path: 'organo/aseguramiento-publico', component: AseguramientoComponent}, 
    {path: 'transparencia', component: TransparenciaComponent},
    {path: 'transparencia/documentos-de-gestion', component: DocumentosgestionComponent},
    {path: 'pacientes', component: PacientesComponent},
    {path: 'pacientes/paciente-add', component: PacienteAddComponent},
    {path: 'pacientes/paciente-list', component: PacienteListComponent},
    {path: 'doctores', component: DoctoresComponent},
    {path: 'doctores/doctores-add', component: DoctorAddComponent},
    {path: 'doctores/doctores-list', component: DoctorListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
