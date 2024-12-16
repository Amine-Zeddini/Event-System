import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AvisModule } from './avis/avis.module';
import { SharedService } from './shared/shared.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './Authentification/login/login.component';
import { SidebarModule } from './sidebar/sidebar/sidebar.module'; // Importation du module Sidebar
import { ParticipantModule } from './overview-participant/participant.module'; // Importation du module Participant
import { EventModule } from './overview-event/event.module'; // Importation du module Event

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    AvisModule,
    RouterLink,
    DashboardModule,
    MatIconModule,
    FormsModule,
    SidebarModule, // Importation du module Sidebar
  ],
  providers: [SharedService], // Les services doivent être déclarés ici
  bootstrap: [AppComponent], // AppComponent est le point d'entrée de l'application
})
export class AppModule {}
