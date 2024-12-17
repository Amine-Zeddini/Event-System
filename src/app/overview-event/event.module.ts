import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { EventComponent } from './event/event.component';
import { SidebarModule } from "../sidebar/sidebar/sidebar.module";
import { DevExtremeModule, DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxRadioGroupModule, DxToastModule, DxValidatorModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';

const routes: Routes=[

]

@NgModule({
  declarations: [
    ListEventComponent,
    EventComponent,
    AddEditEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    SidebarModule,
    DxDataGridModule,
    DxToastModule,
    DxiItemModule,
    DxRadioGroupModule,
    DxButtonModule,
    DxPopupModule,
    DxFormModule,
    NgIf,
    DxValidatorModule,
    DxDataGridModule,
    DevExtremeModule    
],
  exports:[EventComponent]
})
export class EventModule { }
