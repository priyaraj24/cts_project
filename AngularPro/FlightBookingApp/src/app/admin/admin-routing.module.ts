import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { DepartureComponent } from './departure/departure.component';
import { DiscountComponent } from './discount/discount.component';
import { ListAirlinesComponent } from './list-airlines/list-airlines.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path :'adminnav' ,component:AdminnavComponent},
  {path :'' ,component:AdminhomeComponent ,
  children:[
  {path :'listairlines' ,component:ListAirlinesComponent},
  {path :'listflights' ,component:ListFlightsComponent},
  {path :'departure' ,component:DepartureComponent},
  {path :'discount' ,component:DiscountComponent} ,
  {path :'reports' ,component:ReportsComponent} 
]}
];

  


@NgModule({
  imports: [RouterModule.forChild(routes)
   ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
