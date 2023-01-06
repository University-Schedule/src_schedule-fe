import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'Schedule.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'Schedule.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
