import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {ChartModule} from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import {DataViewModule} from 'primeng/dataview';
import { RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import { SavebookingComponent } from './savebooking/savebooking.component';

@NgModule({
  declarations: [
    SearchFlightComponent,
    BookFlightComponent,
    BookingHistoryComponent,
    UserloginComponent,
    UsernavComponent,
    UserhomeComponent,
    UserRegisterComponent,
    SavebookingComponent
  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    ConfirmDialogModule,
    DataViewModule,
    DialogModule,
    ButtonModule,
    ConfirmPopupModule,
    RouterModule,
    TabViewModule,
    ToastModule,
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
      MenuModule,
      StepsModule,
      CalendarModule
    
   ],
   providers: [MessageService,ConfirmationService]
})
export class UserModule { }
