import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ListAvisComponent } from './list-avis/list-avis.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AvisService } from './avis.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';
import { AvisComponent } from './avis/avis.component';
import { ModifierAvisComponent } from './modifier-avis/modifier-avis.component';
import { AjouterAvisComponent } from './ajouter-avis/ajouter-avis.component';
import { SidebarModule } from '../sidebar/sidebar/sidebar.module';

const routes: Routes = [

  ]


@NgModule({
  declarations: [
    AvisComponent,
    ModifierAvisComponent,
    AjouterAvisComponent,
    ListAvisComponent


  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatIconModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    SidebarModule
  ],
  exports:[],
  providers:[AvisService],
})
export class AvisModule {

}
