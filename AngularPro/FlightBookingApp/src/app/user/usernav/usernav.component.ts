import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})
export class UsernavComponent implements OnInit {

  constructor(private router: Router) {}

 
  items!: MenuItem[];
  name!:String;
 // id:number=0;
  //name=localStorage.getItem('userName');

    ngOnInit() {
    //  this.id=localStorage.getItem('userId');
        this.items = [
            {label: 'USER DASHBOARD', icon: 'pi pi-fw pi-bell'},
            {label: 'Book Flight', routerLink: ['/bookflight'], icon: 'pi pi-fw pi-file'},
            {label: 'Manage Bookings',  routerLink: ['/managebooking'], icon: 'pi pi-fw pi-file'},
            {label: 'Booking History',  routerLink: ['/bookinghistory'], icon: 'pi pi-fw pi-file'},
            {label: 'Logout ',  routerLink: ['/login'], icon: 'pi pi-fw pi-file'}
          ];
    }


}
