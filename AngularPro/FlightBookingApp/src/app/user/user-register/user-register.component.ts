import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/register';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
    
    submitted = false;
    form!: FormGroup;
    loading = false;
    private register: Register = new Register();
    roleList: any = ['USER']  ;
    tempRegister!:Register;
    constructor(
        private formBuilder: FormBuilder ,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataserviceService,
        private alertService: AlertService,
        private messageService:MessageService,
        private confirmationService:ConfirmationService
    ) { }
  
    ngOnInit() {
        this.form = this.formBuilder.group({
            userName: ['', Validators.required,Validators.email],
            password: ['', Validators.required],
            role: ['', Validators.required]
        });
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
        this.register = <Register> this.form.value;
        console.log("Form data is :"+JSON.stringify(this.register));
        this.dataService.saveUser(this.register);
        alert("USER Registered Successfully");  
        this.router.navigate(['/login']);  
             
    }
  
  
    

  }
  

