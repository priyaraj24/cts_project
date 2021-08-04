import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  paymentComplete$: any;
  complete() {
    throw new Error('Method not implemented.');
  }
  ticketInformation: any;
  
  getTicketInformation() :any{
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
