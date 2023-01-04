import { Component, OnInit } from '@angular/core';
import { Service, Services, VirtualMachine, VirtualMachines } from '../data';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public get virtualMachines(): VirtualMachine[] {
    return VirtualMachines;
  }

  public get services(): { [key: string]: Service } {
    return Services;
  }
}