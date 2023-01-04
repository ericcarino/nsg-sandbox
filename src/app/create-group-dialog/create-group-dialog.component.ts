import { Component, OnInit } from '@angular/core';
import { Application, Applications, VirtualMachine, VirtualMachineGroup, VirtualMachineGroups, VirtualMachines } from '../data';

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

  public get applications(): { [key: string]: Application } {
    return Applications;
  }

  public get virtualMachineGroups(): VirtualMachineGroup[] {
    return VirtualMachineGroups;
  }
}