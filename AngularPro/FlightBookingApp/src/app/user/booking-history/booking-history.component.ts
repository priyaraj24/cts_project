import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  elements!:[];
  displayBasic2!:boolean;
  
  constructor(
    private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private routes: Router,
    private dataService: DataserviceService,
    private alertService: AlertService,
    private messageService:MessageService,
    private confirmationService:ConfirmationService
) { }


  ngOnInit(): void {
    this.loadData();
  }


  loadData() {
    this.dataService.bookingHistory().subscribe((data:any)=>{
      this.elements=data.history;
    })
  }

  
showBasicDialog2() {
  this.displayBasic2 = true;
}

}
