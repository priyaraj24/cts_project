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
import {DataViewModule} from 'primeng/dataview';
import { Passenger } from 'src/app/model/passenger';


@Component({
  selector: 'app-savebooking',
  templateUrl: './savebooking.component.html',
  styleUrls: ['./savebooking.component.scss']
})
export class SavebookingComponent implements OnInit {

  private search: Search = new Search();
  discounts!: Discount[];
  elements:any[]=[];
  myObject1:Passenger=new Passenger();
  myObjectList:Passenger[]=[];
  coupon!:String;
  count:number=0;
  discountpice:number=0;
  passengerList:Passenger[]=[];
  seats!:number;
  form!:FormGroup;
  pref=["ECONOMY","SPECIAL MEAL"];
  bookingData!:any;
  clonedPassenger: { [s: string]: Passenger; } = {};
  PassengerInstance!:Passenger[];
  pas!: Passenger;
  displayBasic2!: boolean;
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
    this.loadBookingData();
    this.formIntitate();
    this.getCoupons();
  }

  
showBasicDialog2() {
  this.displayBasic2 = true;
}

  formIntitate(){
    this.form = this.formBuilder.group({
        preferences: ['Choose Prefrences', Validators.required],
        age: ['1', Validators.required],
        email: ['example@gmail.com', [Validators.required]],
        passengerName: ['', Validators.required]
    });
  }

  addPassenger(passenger:Passenger){
    //p=new Passenger();
    console.log("adding..."+JSON.stringify(passenger));
    this.pas=passenger;
    this.pas.passengerid=1;
    console.log("new..."+JSON.stringify(this.pas));
    this.passengerList.push(this.pas);
    console.log("passengerList..."+JSON.stringify(this.passengerList));
  }

  

  
onRowEditInit(temp: Passenger) {
  this.clonedPassenger[temp.passengerid] = {...temp};
}

onRowEditSave(temp: Passenger) {
  console.log("updating..."+JSON.stringify(temp));
   this.addPassenger(temp);
 // alert("Added Successfully");
  this.ngOnInit();
}

onRowEditCancel(temp: Passenger, index: number) {
   this.PassengerInstance[index] = this.clonedPassenger[temp.passengerid];
   delete this.clonedPassenger[temp.passengerid];
}

  loadBookingData() {
    console.log("loading ..."+JSON.stringify(this.dataService.element));
    this.elements.push( this.dataService.element);
    // this.dataService.gettempBooking().subscribe((data:any)=>{
    //   this.elements=data;
    // })
  }

  randomString(length: number) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return "PNR_"+str;
}

  getCoupons() {
    this.dataService.getCoupons().subscribe((data:any)=>{
        this.discounts=data;
        console.log("discounts list..."+JSON.stringify(data));
    })
  }

  applyCoupon(data:any){
    this.getCoupons();
      this.coupon= data.coupon;
      console.log("coupon code : "+JSON.stringify(data.coupon));
      this.discounts.forEach(element => {
       if(this.coupon==element.discountCode){
         console.log("discount found"+element.price);
         this.count=this.count+1;
        this.discountpice=element.price;
       }
     });
      if(this.count>0) {
        alert("Coupon Applied!!");
      }
        else{
          alert("Invalid Coupon");
        }
  }


  dynamicTable(data:any){
    var i:number; 
    this.seats=data.seats;
    for(i = this.myObjectList.length;i<data.seats;i++) {
      this.myObjectList.push(new Passenger());
    }
    // this.elements[0].total=(this.seats* this.elements[0].price)*this.discountpice;
    // console.log("total price: "+ this.elements[0].total);
  }


  
  get f() { return this.form.controls; }

  saveBooking(){   
     console.log("Saving flight  book... ");
  //console.log("userId"+this.dataService.globalUser.userId);
  this.bookingData = {
      "passenger":this.passengerList,   
      "userId":localStorage.getItem('userId'),
      //localStorage.getItem('userId'),
      "price":(this.elements[0].price * this.seats)-this.discountpice,
      "seats":this.seats,
      "to":this.elements[0].to,
      "from": this.elements[0].from,
      "onwards": this.elements[0].onwards,//this.datepipe.transform(this.elements[0].onwards, 'yyyy/MM/dd'),
      "towards": this.elements[0].towards,//this.datepipe.transform(this.elements[0].towards, 'yyyy/MM/dd'),
      "flightName":this.elements[0].flightName,
      "flightNumber": this.elements[0].flightNumber,
      "pnrNumber":this.randomString(5),
      "status":"BOOKED"
    
  };
  console.log(" book data ... "+JSON.stringify(this.bookingData));
  //alert("Total ticket cost is "+this.elements[0].price * this.seats-this.discountpice);
  this.dataService.saveBooking(this.bookingData);
  alert("Ticket Booked !!!")
  this.routes.navigate(["/managebooking"]);
  //this.dataService.deleteTempData();
}


}
