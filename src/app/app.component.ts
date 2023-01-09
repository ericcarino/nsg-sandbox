import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateApplicationDialogComponent } from './create-application-dialog/create-application-dialog.component';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _dialog: MatDialog) {}

  public openCreatePolicyDialog() {
    this._dialog.open(CreateGroupDialogComponent, {
      width: '60%',
    });
  }

  public openCreateApplicationDialog() {
    this._dialog.open(CreateApplicationDialogComponent, {
      width: '60%',
    });
  }
}
