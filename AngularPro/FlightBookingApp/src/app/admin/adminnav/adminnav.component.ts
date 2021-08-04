import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'ADMIN DASHBOARD', icon: 'pi pi-fw pi-bell'},
            {label: 'Manage Airlines', routerLink: ['/listairlines'], icon: 'pi pi-fw pi-file'},
            {label: 'Manage Flights',  routerLink: ['/listflights'], icon: 'pi pi-fw pi-file'},
            {label: 'Manage Schedules',  routerLink: ['/departure'], icon: 'pi pi-fw pi-file'},
            {label: 'Manage Discounts',  routerLink: ['/discount'], icon: 'pi pi-fw pi-file'},
            {label: 'Reports',  routerLink: ['/reports'], icon: 'pi pi-fw pi-file'},
            {label: 'Logout ',  routerLink: ['/login'], icon: 'pi pi-fw pi-file'}
        ];
    }

}
