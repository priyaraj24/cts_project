import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SavebookingComponent } from './savebooking/savebooking.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsernavComponent } from './usernav/usernav.component';

const routes: Routes = [
  {path:'login',component:UserloginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'usernav',component:UsernavComponent},
  {path:'',component:UserhomeComponent,
  children:[
  {path:'bookflight',component:BookFlightComponent},
  {path:'bookinghistory',component:BookingHistoryComponent},
  {path:'managebooking',component:SearchFlightComponent},
  {path:'savebooking',component:SavebookingComponent},
]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
