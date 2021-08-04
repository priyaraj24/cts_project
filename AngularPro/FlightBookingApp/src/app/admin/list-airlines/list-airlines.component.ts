import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { Airlines } from 'src/app/model/airlines';
import { ResponseModel } from 'src/app/model/response';
import { AlertService } from 'src/app/service/alert.service';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-list-airlines',
  templateUrl: './list-airlines.component.html',
  styleUrls: ['./list-airlines.component.scss']
})
export class ListAirlinesComponent implements OnInit {
  displayBasic1!:boolean;
  displayBasic2!: boolean;
  clonedAirline: { [s: string]: Airlines; } = {};
  airlineInstance!:Airlines[];
  e1: any = [];
  submitted = false;
  form!: FormGroup;
  loading = false;
  private airline: Airlines = new Airlines();
  tempAirline!:Airlines;
  res!: ResponseModel;

   
  
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
  }

  loadList() {
    this.dataService.listAirlines().subscribe((data: any)=>{
      this.e1=data.airlines;
      console.log(data);
      });
    console.log("List airlines : ",this.e1);
  }

  formIntiate(){
    this.form = this.formBuilder.group({
      airlineName: ['', Validators.required],
      contactNumber:['', Validators.required],
      //,Validators.pattern('/(6|7|8|9)\d{9}/')],
      contactAddress: ['', Validators.required],
      logo: ['', Validators.required]
  });
  }
  handleDelete(event:Event,temp: number ) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //confirm action
            this.dataService.deleteAirline(temp).subscribe((data:any)=>{
              this.res.message=data.message;
            });
            this.loadList();
                this.messageService.add({
                  severity: "info",
                  summary: "Confirmed",
                  detail: "You have accepted"
                });
                this.loadList();
                this.router.navigate(['/listairlines']);  
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
    this.routes.navigate(['/listairlines']);
}

showBasicDialog2() {
  this.displayBasic2 = true;
}

showBasicDialog1() {
  this.displayBasic2 = false;
}

onRowEditInit(temp: Airlines) {
  this.clonedAirline[temp.airlineId] = {...temp};
}

onRowEditSave(temp: Airlines) {
   this.res=this.dataService.updateAirlines(temp).subscribe((data:any)=>{
    
   // alert("Airline Edited Successfully");
  });
    alert("Airline Edited Successfully");
    this.ngOnInit();
 
}
onRowEditCancel(temp: Airlines, index: number) {
   this.airlineInstance[index] = this.clonedAirline[temp.airlineId];
   delete this.clonedAirline[temp.airlineId];
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
    this.airline = <Airlines> this.form.value;
    console.log("Form data is :"+JSON.stringify(this.airline));
    this.res= this.dataService.saveAirlines(this.airline);
    //console.log("message : "+JSON.stringify(this.res.message));
    alert("Airline Saved Successfully"); 
    this.displayBasic2=false;
    this.formIntiate();  
    this.loadList();
    this.router.navigate(['/listairlines']);
    

         
}



}
