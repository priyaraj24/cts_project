import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Departure } from 'src/app/model/departure';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { DropdownLabel } from 'src/app/model/dropdownlabel';


@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.scss']
})
export class DepartureComponent implements OnInit {
  displayBasic1!:boolean;
  displayBasic2!: boolean;
  clonedDeparture: { [s: string]: Departure; } = {};
  DepartureInstance!:Departure[];

    submitted = false;
    form!: FormGroup;
    loading = false;
    private departure: Departure = new Departure();
    dropdown!:DropdownLabel[];
    date!: Date;
    message!:String;
    e1: any = [ ];

  
  constructor( private routes:Router,public dataService : DataserviceService,
    private confirmationService: ConfirmationService,private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {  
  this.initiateForm();
  this.loadDropdown();
  this.loadData();
  }


  initiateForm(){
    this.form = this.formBuilder.group({
      flightId: ['Choose Flight', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      price: ['', Validators.required]
  });
  }
  loadData() {
    this.dataService.listDepartures().subscribe((data: any)=>{
      this.e1=data;
        this.e1.forEach((element:Departure) => {
            this.dataService.fetchflightIdBydepartureId(element.departureId).subscribe((data:any)=>{
              console.log( "id :"+data.id)
              element.flightId=data.id;
            });
            
            this.dataService.fetchFlightName(element.departureId).subscribe((data:any)=>{
              console.log( "name :"+data.name);
              element.flightName=data.name;
            });
      });

      console.log(data);
      });
   
  }

  loadDropdown(){
     // this.dropdown=this.dataService.getAllFlightName();
     this.dataService.getAllFlightName().subscribe(data=>{
      this.dropdown=data;
    });
    
    console.log("dropdown data :"+this.dropdown);
  }
  handleDelete(event: Event,temp: number ) {
    this.dataService.deleteDepartment(temp).subscribe((data:any) => {
      console.log(data);
      this.message=data.message;
    });
    alert("Deleted SuccessFully");
    this.router.navigate(['/departure']);  
    this.loadData();
    this.ngOnInit();
   

    // this.confirmationService.confirm({
    //     target: event.target as EventTarget,
    //     message: 'Are you sure that you want to proceed?',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         //confirm action
    //        // this.dataService.deleteDepartment(temp.departureId);
    //         this.dataService.deleteDepartment(temp).subscribe((data:any) => {
    //           console.log(data);
    //           this.message=data.message;
    //         });
            
    //         this.messageService.add({
    //           severity: "info",
    //           summary: "Confirmed",
    //           detail: "You have accepted"
    //         });
    //         this.dataService.deleteDepartment(temp).subscribe((data:any) => {
    //           console.log(data);
    //           this.message=data.message;
    //         });
    //         this.loadData();
    //         this.router.navigate(['/departure']);  
    //     },
    //     reject: () => {
    //         //reject action
    //         this.messageService.add({
    //           severity: "error",
    //           summary: "Rejected",
    //           detail: "You have rejected"
    //         });
    //     }
    // });
}

showBasicDialog2() {
  this.displayBasic2 = true;
}

showBasicDialog1() {
  this.displayBasic1 = true;
}

onRowEditInit(temp: Departure) {
  this.clonedDeparture[temp.departureId] = {...temp};
}

onRowEditSave(temp: Departure) {
  console.log("updating..."+JSON.stringify(temp));
   this.dataService.updateDeparture(temp).subscribe((data:any)=>{
    console.log("updated..."+data.message);
  });
  alert("Departure Edited Successfully");
  this.router.navigate(['/departure']); 
  this.loadData();
  
}

onRowEditCancel(temp: Departure, index: number) {
   this.DepartureInstance[index] = this.clonedDeparture[temp.departureId];
   delete this.clonedDeparture[temp.departureId];
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
    this.departure = <Departure> this.form.value;
    console.log("Form data is :"+JSON.stringify(this.departure));
    this.dataService.saveDeparture(this.departure);
    alert("Departure Saved Successfully");  
    this.displayBasic2= false;
    this.loadData();
    this.initiateForm();
    this.router.navigate(['/departure']); 
         
}
}
