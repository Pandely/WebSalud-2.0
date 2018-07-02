import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { OrganoComponent } from './organo/organo.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { FooterComponent } from './footer/footer.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
/**import { CommonModule } from 'angularfire2';**/

import { PacientesComponent } from './pacientes/pacientes.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { PacienteAddComponent } from './pacientes/paciente-add/paciente-add.component';
import { PacienteListComponent } from './pacientes/paciente-list/paciente-list.component';
import { DoctorAddComponent } from './doctores/doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctores/doctor-list/doctor-list.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { DoctorService } from './services/doctor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InstitucionalComponent,
    DirectorioComponent,
    OrganoComponent,
    TransparenciaComponent,
    FooterComponent,
    MisionvisionComponent,
    ObjetivosComponent,
    UbicacionComponent,
    HistoriaComponent,
    CreacionComponent,
    EstructuraComponent,
    MarcolegalComponent,
    RedsaludComponent,
    AseguramientoComponent,
    DocumentosgestionComponent,
    PacientesComponent,
    PacienteAddComponent,
    PacienteListComponent,
    DoctoresComponent,
    DoctorAddComponent,
    DoctorListComponent,
    AdminComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Formularios
    AngularFireModule.initializeApp(environment.firebase),//Conexion con Firebase
    AngularFireAuthModule,//Autentificacion con Firebase
    AngularFirestoreModule,
    /**CommonModule,//Toastr: mensajes emergentes**/
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
