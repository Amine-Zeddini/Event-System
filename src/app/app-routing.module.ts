import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './Authentification/login/login.component';
import { AvisComponent } from './avis/avis/avis.component';
import { AjouterAvisComponent } from './avis/ajouter-avis/ajouter-avis.component';
import { ModifierAvisComponent } from './avis/modifier-avis/modifier-avis.component';
import { ListAvisComponent } from './avis/list-avis/list-avis.component';
import { ListParticipantComponent } from './overview-participant/list-participant/list-participant.component';
import { AddEditParticipantComponent } from './overview-participant/add-edit-participant/add-edit-participant.component';
import { ListEventComponent } from './overview-event/list-event/list-event.component';
import { AddEditEventComponent } from './overview-event/add-edit-event/add-edit-event.component';
import { AuthenticationGuard } from './auth/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'acceuil', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'ajouterAvis',
    component: AjouterAvisComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'avis/:id/modifierAvis',
    component: ModifierAvisComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'listAvis',
    component: ListAvisComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'listParticipant',
    component: ListParticipantComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'AjouterModifierParticipant',
    component: AddEditParticipantComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'listEvent',
    component: ListEventComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'AjouterModifierEvent',
    component: AddEditEventComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
