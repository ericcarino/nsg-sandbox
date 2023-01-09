import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  Applications,
  Service,
  ServiceAccessPolicies,
  ServiceAccessPolicy,
  Services,
  VirtualMachineGroup,
  VirtualMachineGroups,
VirtualMachines,
} from '../data';

interface InstanceGroups {
  name: string;
  instances: string[];
  services: {
    provided: string[];
    consumed: string[];
  };
}

@Component({
  selector: 'app-instance-groups',
  templateUrl: './instance-groups.component.html',
  styleUrls: ['./instance-groups.component.css'],
})
export class InstanceGroupsComponent implements AfterViewInit, OnInit {
  private _instanceGroups: InstanceGroups[] = [];
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    'name',
    'instances',
    'services-provided',
    'services-consumed',
  ];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  public ngOnInit() {
    const instanceGroups = VirtualMachineGroups.map(
      (group: VirtualMachineGroup) => {
        const services = Services.filter(
          (service: Service) => service.groupId === group.id
        );

        const provided = services.map(
          (service: Service) => Applications[service.application].name
        );

        const policies = ServiceAccessPolicies.filter(
          (policy: ServiceAccessPolicy) => policy.groupId === group.id
        );

        const consumed = policies.map((policy: ServiceAccessPolicy) => {
          const service = Services.find(
            (service) => service.id === policy.serviceId
          );
          return Applications[service.application].name;
        });

        const instances = group.virtualMachines.map((vmId: number) => VirtualMachines.find(vm => vm.id === vmId).name);

        return {
          name: group.name,
          instances,
          services: {
            provided,
            consumed,
          },
        };
      }
    );

    console.log(instanceGroups);
    this.dataSource = new MatTableDataSource(instanceGroups);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
