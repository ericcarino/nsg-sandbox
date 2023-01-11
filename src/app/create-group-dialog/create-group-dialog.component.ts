import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Application, ApplicationKey, Applications, ServiceAccessPolicies, Services, VirtualMachine, VirtualMachineGroup, VirtualMachineGroups, VirtualMachines } from '../data';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {
  private _serviceId = Math.random();
  serviceName?: string;
  servingGroupName?: string;
  consumingGroupName?: string;
  applicationName?: string;


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
    const serviceName = this.policyForm.get('serviceName').value as unknown as string;
    const application = this.policyForm.get('application').value as unknown as ApplicationKey;
    const servingGroup = this.policyForm.get('servingGroup').value as unknown as VirtualMachineGroup;

    this.serviceName = serviceName;
    this.servingGroupName = servingGroup.name;

    Services.push({
      id: this._serviceId,
      application: application,
      groupId: servingGroup.id
    });
  }

  public createPolicy() {
    const consumingGroup = this.policyForm.get('consumingGroup').value as unknown as VirtualMachineGroup;

    this.consumingGroupName = consumingGroup.name;

    ServiceAccessPolicies.push({
      id: Math.random(),
      serviceId: this._serviceId,
      groupId: consumingGroup.id
    });
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