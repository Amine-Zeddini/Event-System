import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from '../sidebar/sidebar/sidebar.module';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { ParticipantComponent } from './participant/participant.component';
import { AddEditParticipantComponent } from './add-edit-participant/add-edit-participant.component';
import {
  DevExtremeModule,
  DxButtonGroupModule,
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxTemplateModule,
  DxTextAreaModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxScrollViewModule,
  DxListModule,
  DxSliderModule,
  DxTreeListModule,
} from 'devextreme-angular';

const routes: Routes = [];

@NgModule({
  declarations: [
    ListParticipantComponent,
    ParticipantComponent,
    AddEditParticipantComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    SidebarModule,
    DevExtremeModule,
    DxFormModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxScrollViewModule,
    DxListModule,
    DxSliderModule,
    DxTreeListModule,
    DxButtonGroupModule,
  ],
  exports: [ParticipantComponent],
})
export class ParticipantModule {}
