import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from '../sidebar/sidebar/sidebar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SidebarModule],
})
export class DashboardModule {}
