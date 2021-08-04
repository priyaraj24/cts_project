import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
//import { AuthenticationGuardService } from './services/authentication-guard.service';
import {ChartModule} from 'primeng/chart';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
   
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    HttpClientModule,
    NgbModule,
    TabViewModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
    AppRoutingModule,
    TableModule,
    ChartModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    SplitterModule,
    CardModule,
    PanelModule,
    RadioButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    TabViewModule,
    MessageModule,
    PasswordModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    MenuModule
     ],

  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

