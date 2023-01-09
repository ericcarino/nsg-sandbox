import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { InstanceGroupsComponent } from './instance-groups/instance-groups.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CreateApplicationDialogComponent } from './create-application-dialog/create-application-dialog.component';
import { InstancesComponent } from './instances/instances.component';
import { PoliciesComponent } from './policies/policies.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    AppComponent,
    InstanceGroupsComponent,
    CreateGroupDialogComponent,
    CreateApplicationDialogComponent,
    InstancesComponent,
    PoliciesComponent,
    ServicesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
