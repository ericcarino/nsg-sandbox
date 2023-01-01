import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VirtualMachineGroups } from '../data';

@Component({
  selector: 'app-instance-groups',
  templateUrl: './instance-groups.component.html',
  styleUrls: ['./instance-groups.component.css'],
})
export class InstanceGroupsComponent {
  displayedColumns: string[] = [
    'name',
    'instances',
    'services-provided',
    'services-consumed',
  ];
  dataSource = new MatTableDataSource(VirtualMachineGroups);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

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
