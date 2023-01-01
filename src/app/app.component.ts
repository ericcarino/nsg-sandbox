import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _dialog: MatDialog) {}

  public openCreateDialog() {
    this._dialog.open(CreateGroupDialogComponent);
  }
}
