import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Application, Applications, Services, VirtualMachine, VirtualMachineGroup, VirtualMachineGroups, VirtualMachines } from '../data';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {

  policyForm = this._fb.group({
    name: [''],
    vms: [],
    serviceName: [''],
    application: [],
    servingGroup: [],
    consumingGroup: []
  });

  constructor(private _fb: NonNullableFormBuilder) { }

  ngOnInit() {
  }

  public createVmGroup() {
    const { name, vms } = this.policyForm.value;

    VirtualMachineGroups.push({
      id: Math.random(),
      name,
      virtualMachines: vms,
    });

    this.policyForm.get('name').reset();
    this.policyForm.get('vms').reset();
  }

  public createService() {
    const serviceName = this.policyForm.get('serviceName') as unknown as string;
    const application = this.policyForm.get('application') as unknown as Application;
    const servingGroup = this.policyForm.get('servingGroup') as unknown as VirtualMachineGroup;

    // Services.push({
    //   id: Math.random(),
    //   application: application.
    //   groupId: servingGroup
    // });

    debugger
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