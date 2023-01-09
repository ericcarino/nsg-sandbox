import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-application-dialog',
  templateUrl: './create-application-dialog.component.html',
  styleUrls: ['./create-application-dialog.component.css']
})
export class CreateApplicationDialogComponent implements OnInit {
  formGroup = this._fb.group({
    name: [''],
    protocol: [''],
    port: ['']
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

}