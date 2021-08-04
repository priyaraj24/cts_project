import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ListAirlinesComponent } from './list-airlines/list-airlines.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { DepartureComponent } from './departure/departure.component';
import { RouterModule } from '@angular/router';
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
import { AdminhomeComponent } from './adminhome/adminhome.component';
import {StepsModule} from 'primeng/steps';
import { DiscountComponent } from './discount/discount.component';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DialogModule } from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    ListAirlinesComponent,
    ListFlightsComponent,
    AdminnavComponent,
    ReportsComponent,
    DepartureComponent,
    AdminhomeComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ConfirmDialogModule,
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
export class AdminModule { 
  
}
