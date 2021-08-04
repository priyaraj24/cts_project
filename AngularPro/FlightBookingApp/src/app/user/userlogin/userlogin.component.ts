import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Register } from 'src/app/model/register';
import { AlertService } from 'src/app/service/alert.service';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
 
  user!:any;
  message!:string;
  submitted = false;
  form!: FormGroup;
  loading = false;
  private register: Register = new Register();
  roleList: any = ['ADMIN', 'USER']  ;
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
      this.formIntiate();
  }

  formIntiate() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required,Validators.email],
      password: ['', Validators.required],
      role: ['Choose role', Validators.required]
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
      this.dataService.checkCredentials(this.register).subscribe
       ((data :any)=>{
         this.message=data.message;
        console.log("db dtaa..."+JSON.stringify(data));
        localStorage.setItem('userId', data.user.userId);
        localStorage.setItem('userName', data.user.userName);
        console.log("local storage ... id : "+localStorage.getItem('userId') + "name :"+ localStorage.getItem('userName'));
        console.log("My user"+JSON.stringify(this.user));
      if(this.message=="Success"){
          if(this.register.role=="ADMIN"){
            console.log("admin...");
            //this.ngOnInit();
            this.router.navigate(['/listairlines']);
            alert("Admin Logged Successfully");                  
          }
          else if(this.register.role=="USER"){
            console.log("user...");
            ///this.ngOnInit();
            this.router.navigate(['/bookflight']);
            alert("User Logged Successfully");
          }
    }
    else if(this.message=="Faliure"){
      console.log("invalid...");
      //alert("Invalid Credentials");
      this.router.navigate(['/login']);
      //this.ngOnInit();
    }
  
    
        }
      );
    //  console.log("My user -----"+JSON.stringify(this.user));
      this.dataService.globalName=this.register.username;
      console.log("Current username: "+this.register.username);  
  }


}
