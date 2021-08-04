import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Departure } from 'src/app/model/departure';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { DropdownLabel } from 'src/app/model/dropdownlabel';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/model/register';
import { Search } from 'src/app/model/search';
import { Discount } from 'src/app/model/discount';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

  elements!:any[];
  displayBasic2!:boolean;

  ngOnInit(){
    this.loadData();
  }

  constructor(
    private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private routes: Router,
    private dataService: DataserviceService,
    private alertService: AlertService,
    private messageService:MessageService,
    private confirmationService:ConfirmationService
) { }

loadData() {
  this.dataService.bookingManage().subscribe((data:any)=>{
    this.elements=data.bookings;
  })
}

CancelBooking(temp:any) {
          console.log("cancelling..."+JSON.stringify(temp) );
          console.log("status..."+JSON.stringify(temp.status) );
          //confirm action     
          if(temp.status=="BOOKED") {
            temp.status= "CANCELLED";
          } 
          console.log("status..."+JSON.stringify(temp.status) );
          this.dataService.cancelBooking(temp).subscribe((data:any)=>{
            console.log(" cancelled... "+data.message);
          });
          alert("Cancelled !!!");
          this.routes.navigate(['/managebooking']);
}


showBasicDialog2() {
  this.displayBasic2 = true;
}

}
