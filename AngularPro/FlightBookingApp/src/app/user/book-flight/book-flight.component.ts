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
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  displayBasic1=true;
  displayBasic2=false;
  res!:String;
  show=false;    
  submitted = false;
  form!: FormGroup;
  loading = false;
  private search: Search = new Search();
  discounts!: Discount[];
  fromList: any = []  ;
  toList: any = []  ;
  onwardsList: any = ['time1']  ;
  towardsList: any = ['time2']  ;
  tempRegister!:Register;
  elements!:any[];
  couponPrice:number=0;
  
  constructor(
      private formBuilder: FormBuilder ,
      private route: ActivatedRoute,
      private routes: Router,
      private dataService: DataserviceService,
      private alertService: AlertService,
      private messageService:MessageService,
      private confirmationService:ConfirmationService
  ) { }

  ngOnInit() {
      this. formIntitate();
      this.getCoupons();
      this.loadFromData();
      this.loadToData();
  }

  formIntitate(){
    this.form = this.formBuilder.group({
        from: ['Choose FromJourney', Validators.required],
        to: ['Choose ToJourney', Validators.required],
        type: ['oneway', [Validators.required]],
        onwards: ['', Validators.required],
        towards: [''],
        price: ['']
    });
  }
    getCoupons() {
        this.dataService.getCoupons().subscribe((data:any)=>{
            this.discounts=data;
        })
    }

    loadFromData() {
       this.dataService.fetchFromJourney().subscribe((data:any)=>{
           this.fromList=data;
       })
    }

    loadToData() {
        this.dataService.fetchToJourney().subscribe((data:any)=>{
            this.toList=data;
        })
     }


    
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;
      // reset alerts on submit
      this.alertService.clear();
      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
      this.loading = true
       this.search = <Search> this.form.value;
       console.log("Form data is :"+JSON.stringify(this.search));
    -  this.dataService.searchFlight(this.search).subscribe((data:any)=>{
          this.elements=data.search;
         // this.search.onwards=this.elements[0].onwards;
         console.log("search Res : "+JSON.stringify(data.search));
      });
    
      this.displayBasic2=false;
       alert("Search Results Loaded!!!");  

           
  }


  
  hidetoJourney(){
    this.show=false;
}

showtoJourney(){
    this.show=true;
}


handleBook(event:Event,temp:Search) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //confirm action
            //temp.onwards
            this.dataService.savetempBooking(temp);
            console.log("Form data is :"+JSON.stringify(temp));
                this.messageService.add({
                  severity: "info",
                  summary: "Confirmed",
                  detail: "Confirmed Booking !!! Add Passengers...."
                });
                this.routes.navigate(['/savebooking']);  
                },
                reject: () => {
                    //reject action
                    this.messageService.add({
                    severity: "error",
                    summary: "Rejected",
                    detail: "Rejected Booking!!!"
                    });
                    this.routes.navigate(['/bookflight']);  
                }
            });
   
}


showBasicDialog2() {
    this.displayBasic2 = true;
  }

processFlight(search:Search){

    if(this.search.coupon!=null&&this.couponPrice==0){
        this.routes.navigate(['/bookflight']);
        //alert("Invalid Coupon");
    }else{
            this.search.price=this.search.price*this.search.seats - this.couponPrice;
            this.search.pnrNumber="PNR_"+this.randomString(5);
            this.dataService.searchFlight(this.search).subscribe((data:any)=>{
            
    });
    }
   
}


    randomString(length: number) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // Pick characers randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    }

}
