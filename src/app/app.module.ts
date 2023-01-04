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
  ],
  declarations: [
    AppComponent,
    InstanceGroupsComponent,
    CreateGroupDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}