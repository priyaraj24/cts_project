import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Discount } from 'src/app/model/discount';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { DropdownLabel } from 'src/app/model/dropdownlabel';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import { ResponseModel } from 'src/app/model/response';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  displayBasic1!:boolean;
  displayBasic2!: boolean;
  clonedDiscount: { [s: string]: Discount; } = {};
  discountInstance!:Discount[];
    res!:ResponseModel;
    submitted = false;
    form!: FormGroup;
    loading = false;
    private discount: Discount = new Discount();
    message!:String;
    e1: any = [  ];

  
  constructor( private routes:Router,public dataService : DataserviceService,
    private confirmationService: ConfirmationService,private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): void {
   this.formIntitate();
    this.loadList();
  }


  loadList() {
    this.dataService.listDiscounts().subscribe((data: any)=>{
      this.e1=data.discounts;
      console.log(data);
      });
    console.log("List discounts : ",this.e1);
  }
  formIntitate() {
    this.form = this.formBuilder.group({
      discountName: ['', Validators.required],
      discountCode:['', Validators.required],
      price:['', Validators.required]
  });
  }



  handleDelete(event: Event,temp: number ) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            //confirm action
            this.dataService.deleteDiscount(temp).subscribe((data:any)=>{
              this.message=data.message;
              console.log("res :"+JSON.stringify(this.message));
            });
            this.loadList();
            this.messageService.add({
              severity: "info",
              summary: "Confirmed",
              detail: "You have accepted"
            });
            this.loadList();
            this.router.navigate(['/discount']);  
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

onRowEditInit(temp: Discount) {
  this.clonedDiscount[temp.discoutId] = {...temp};
}

onRowEditSave(temp: Discount) {
   this.dataService.updateDiscounts(temp).subscribe((data:any)=>{
    this.ngOnInit();
    alert("Discount Edited Successfully");
  });
}

onRowEditCancel(temp: Discount, index: number) {
   this.discountInstance[index] = this.clonedDiscount[temp.discoutId];
   delete this.clonedDiscount[temp.discoutId];
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
    this.discount = <Discount> this.form.value;
    console.log("Form data is :"+JSON.stringify(this.discount));
    this.dataService.saveDiscount(this.discount).subscribe((data:any)=>{
      this.message=data.message;
    });
    alert("Discount Saved Successfully");
    this.displayBasic2=false;
    this.loadList();
    this.formIntitate();        
}


}
