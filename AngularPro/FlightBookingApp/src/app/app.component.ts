import { Component } from '@angular/core';
import { Router ,RouterOutlet} from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightBookingApp';
  ImagePath = 'https://moneycrashers-sparkchargemedia.netdna-ssl.com/wp-content/uploads/2011/06/go-flight-booking-air-online-ticket.jpg';

  constructor(private router: Router) { }

  adminbuttonClick(){
    this.router.navigate(['/adminlogin']);
  }

  userbuttonClick(){
    this.router.navigate(['/userlogin']);
  }
  
    ImageClick() {
      //    this.ImagePath = 'home';
            this.router.navigate(['/home']);
    }
}
