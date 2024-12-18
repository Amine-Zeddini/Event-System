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
import { SidebarModule } from './sidebar/sidebar/sidebar.module';
import { ParticipantModule } from './overview-participant/participant.module'; 
import { EventModule } from './overview-event/event.module';

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
    SidebarModule, 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent], 
})
export class AppModule {}
