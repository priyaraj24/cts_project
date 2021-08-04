import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Airlines } from 'src/app/model/airlines';
import { Departure } from 'src/app/model/departure';
import { Flights } from 'src/app/model/flights';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { DropdownLabel } from 'src/app/model/dropdownlabel';
import { ResponseModel } from 'src/app/model/response';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.scss']
})
export class ListFlightsComponent implements OnInit {
  flightInstance!:Flights[];
  elements: any = [];
  dept!:Departure;
  //airline!: Airlines;
  airlineName!: String;
  displayBasic1!:boolean;
  displayBasic2!: boolean;
  submitted = false;
  message!:String;
  form!: FormGroup;
  loading = false;
  private flight: Flights = new Flights();
  dropdown!:DropdownLabel[];
  cloneFlight:{ [s: string]: Flights; } = {};
  res!:ResponseModel;

   
  constructor( private routes:Router,public dataService : DataserviceService,
    private confirmationService: ConfirmationService,private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }
  

  ngOnInit(): void {
    this.formIntiate();
    this.loadList();
    this.loadDropDown();
    
  }

  loadList() {
    this.dataService.listFlights().subscribe((data: any)=>{
      this.elements=data.flights;
      console.log("data" + JSON.stringify(this.elements));
        this.elements.forEach((flight :Flights )=>{
            this.dataService.getAirlineIdByflightId(flight.flightId).subscribe((data:any)=>{
              flight.airlineId= data.id;
            });          

            this.dataService.fetchAirlineName(flight.flightId).subscribe((data:any)=>{
              flight.airlineName= data.name;
            });          
        });
      });
    console.log("List flights : ",this.elements);
  }

  loadDropDown() {
    this.dataService.getAllAirlineName().subscribe(data=>{
      this.dropdown=data;
      });
      console.log("dropdown data :"+this.dropdown);
  }
  formIntiate() {
        this.form = this.formBuilder.group({
          flightName: ['', Validators.required],
          flightNumber:['', Validators.required],
          //,Validators.pattern('/(6|7|8|9)\d{9}/')],
          airlineId: ['', Validators.required]
      });
  }

  
  
  
  handleDelete(event: Event,temp: number ) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //confirm action
            this.dataService.deleteFlight(temp).subscribe((data:any) => {
              console.log(data);
              this.message=data.message;
            });
            this.loadList();
            this.messageService.add({
              severity: "info",
              summary: "Confirmed",
              detail: "You have accepted"
            });
            this.loadList();
            this.router.navigate(['/listflights']);  
        },
        reject: () => {
            //reject action
            this.messageService.add({
              severity: "error",
              summary: "Rejected",
              detail: "You have rejected"
            });
        }
    });
}


showBasicDialog2() {
  this.displayBasic2 = true;
}

showBasicDialog1() {
  this.displayBasic1 = true;
}

onRowEditInit(temp: Flights) {
  this.cloneFlight[temp.flightId] = {...temp};
}

onRowEditSave(temp: Flights) {
   this.dataService.updateFlights(temp).subscribe((data:any)=>{
     this.message=data.message;
    this.ngOnInit();
    alert("Flight Edited Successfully");
  });
}
onRowEditCancel(temp: Flights, index: number) {
   this.flightInstance[index] = this.cloneFlight[temp.flightId];
   delete this.cloneFlight[temp.flightId];
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
    this.flight = <Flights> this.form.value;
    console.log("Form data is :"+JSON.stringify(this.flight));
    this.dataService.saveFlights(this.flight);
    alert("Flight Saved Successfully");
    this.displayBasic2=false;
    this.formIntiate();  
    this.loadList();
    this.router.navigate(['/listflights']);  

         
}

}
