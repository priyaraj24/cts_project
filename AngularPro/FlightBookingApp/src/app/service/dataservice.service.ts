import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flights } from '../model/flights';
import { Airlines } from '../model/airlines';
import { Departure } from '../model/departure';
import { Discount } from '../model/discount';
import {  DropdownLabel } from '../model/dropdownlabel';
import { TemplateBindingParseResult } from '@angular/compiler';
import { ResponseModel } from '../model/response';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
    
  
  object!:any;
  currentUrl:String="";
  apiUrl:String="http://localhost:9090/"
  //apiUrl="http://ec2-3-141-104-217.us-east-2.compute.amazonaws.com:9090/"
  adminUrl:String="api/admin/";
  userUrl:String="api/user/";
  commonUrl:String="api/common/";
  res!:ResponseModel;
  serviceUrl:String ="http://localhost:3000/";
  flights! : Flights ;
  airlines!:Airlines;
  dropdownList!:DropdownLabel[];
  element:any;
  globalName!:any;
  constructor(public http: HttpClient) { }

  // save in temp json server
  savetempBooking(search: Search) {
    console.log('Saving...'+search);
    this.element=search;
    console.log("temp search data in data service ..."+JSON.stringify(this.element));
    // this.http.post(this.serviceUrl+'search',search).subscribe((data: any) => {
    //   console.log('saved temp data...'+data);
    // });
  }

   // delete temp search data
   deleteTempData():any {
    return this.http.delete(this.serviceUrl+'search/1').subscribe(data => {
      console.log("Deleted temp data :"+data);
    });
   
    }

   // save in temp json server
   gettempBooking():Observable<any> {
    console.log('fetch temp data...');
    return this.http.get(this.serviceUrl+'search');
  }


  //Save Airlines
  public saveAirlines(airline: Airlines) :any{
    console.log('Saving...'+airline);
    // this.http.post(this.serviceUrl+'airlines',airline).subscribe((data: any) => {
    //   console.log('Saving...'+data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    this.http.post(this.currentUrl+'airlines/save',airline).subscribe((data: any) => {
      console.log('Saving...'+data);
      this.res.message=data;
    });
    return this.res;
  
  }

  // List all Airlines
  public listAirlines(): Observable<any> {
    // return this.http.get(this.serviceUrl+'airlines');
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'airlines/fetch');
  }

  // Get Airlinename
  fetchAirlineName(id: number) :Observable<any> {
    //return "temp";
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'flight/fetch/airlineName/'+id);
  }

   // Get Airlinename
   getAllAirlineName():Observable<any>{
   //  return [{'id':1,'label':'AirIndia'},{'id':2,'label':'Deccan'}];
   this.currentUrl=this.apiUrl+''+this.adminUrl;
   return this.http.get(this.currentUrl+'airlines/fetch/AirlineNames');
   
  }

  //update airline
  public updateAirlines(temp: Airlines) :any {
    // return this.http.put(this.serviceUrl+'airlines/'+temp.airlineId,temp).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'airlines/update',temp).subscribe((data: any) => {
      console.log('Updating...'+data);
    });
  }

  // delete airline
  deleteAirline(id: number):Observable<any> {
    // this.http.delete(this.serviceUrl+'airlines/'+id).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl
    return this.http.delete(this.currentUrl+'airlines/delete/'+id);
    }
 
  // List all flights
  public listFlights(): Observable<any> {
    //return this.http.get(this.serviceUrl+'flights');
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'flight/fetch');

  }


  // Get all flightnames
  getAllFlightName():Observable<any>{
    //return [{'id':1,'label':'XXX'},{'id':2,'label':'YYY'}];
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'flight/fetch/flightNames');
  }

  // Get flightname
  public fetchFlightName(id: number):Observable<any> {
    //return this.http.get(this.serviceUrl+'flights?id='+id);
    //  return "temp";
    console.log("fetching flight name...")
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'departure/fetch/flightId/'+id);
  }
  

  // Get flightname
  public getAirlineIdByflightId(id: number):any {
    //return this.http.get(this.serviceUrl+'flights?id='+id);
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'flight/fetch/airlineId/'+id);;
  }

  //Save Flights
  public saveFlights(flight: Flights) :any {
    console.log('Saving...'+flight);
    // return this.http.post(this.serviceUrl+'flights',flight).subscribe((data: any) => {
    //   console.log('Saving...'+data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'flight/save',flight).subscribe((data: any) => {
      console.log('Saving...'+data);
    });
  
  }
  
  // update flight
  public updateFlights(flight: Flights):any{
    // this.http.put(this.serviceUrl+'flights/update',flight).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'flight/update',flight).subscribe((data: any) => {
      console.log('Saving...'+data);
    });
  }

  // delete Flight
  public deleteFlight(id:number):Observable<any>{
   // return this.http.delete(this.serviceUrl+'flights/'+id);
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.delete(this.currentUrl+'flight/delete/'+id);

  }

  // List all Departure
  public listDepartures(): Observable<any> {
   // return this.http.get(this.serviceUrl+'departure');
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'departure/fetch');
  }

  //Save departure
  public saveDeparture(dept: Departure):any {
    console.log('Saving...'+dept);
  //   this.http.post(this.serviceUrl+'departure',dep).subscribe((data: any) => {
  //     console.log('Saving...'+data);
  // });
  this.currentUrl=this.apiUrl+''+this.adminUrl;
  return this.http.post(this.currentUrl+'departure/save',dept).subscribe((data: any) => {
    console.log('Saving...'+data);
});
  }


  // Get departure details by ID
  // public fetchDeparture(id: number):any {
  //   return this.http.get(this.serviceUrl+'departure/?id='+id);
  // }

    public fetchflightIdBydepartureId(id: number):Observable<any> {
      // return this.http.get(this.serviceUrl+'departure/?id='+id);
      //return "temp";
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'departure/fetch/flightId/'+id);
     }

  // delete department
  deleteDepartment(id: any):Observable<any> {
    // this.http.delete(this.serviceUrl+'departure/'+id).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.delete(this.currentUrl+'departure/delete/'+id);
  }
  
  //update departure
  public updateDeparture(temp: Departure):any{
    // this.http.put(this.serviceUrl+'departure/'+temp.departureId,temp).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'departure/update',temp).subscribe((data: any) => {
      console.log('Updating...'+data);
    });
  }
 

  // list Discounts
  listDiscounts() : Observable<any>{
    //return this.http.get(this.serviceUrl+'discounts');
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'discount/fetch');

  }


  //Save Discount
  public saveDiscount(discount: Discount):any {
    console.log('Saving...'+discount);
  //   this.http.post(this.serviceUrl+'discounts',discount).subscribe((data: any) => {
  //     console.log('Saving...'+data);
  // });
  this.currentUrl=this.apiUrl+''+this.adminUrl;
  return this.http.post(this.currentUrl+'discount/save',discount).subscribe((data: any) => {
    console.log('Saving...'+data);
});
  
  }
  // delete Discounts
  deleteDiscount(id: number):Observable<any>{
    // return this.http.delete(this.serviceUrl+'discounts/'+id).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.delete(this.currentUrl+'discount/delete/'+id);
  }

  // update Discount
  updateDiscounts(temp: Discount):any{
    // this.http.put(this.serviceUrl+'discounts/'+temp.discoutId,temp).subscribe(data => {
    //   console.log(data);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'discount/update',temp).subscribe((data: any) => {
      console.log('Updating...'+data);
    });
  }

  // Create new user
  public saveUser(registerData:Register):Observable<any>{
    //   this.http.post(this.serviceUrl+'users',registerData).subscribe((data: any) => {
    //     console.log('Saving...'+registerData);
    // });
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.post(this.currentUrl+'user/register',registerData);
  }


  // check admin  and user credentials
  public checkCredentials(reg:Register):Observable<any> {
   // return this.http.get(this.serviceUrl+'users/?username='+reg.username+'&password='+reg.password+'&role='+reg.role);
   this.currentUrl=this.apiUrl+''+this.adminUrl;
   return this.http.post(this.currentUrl+'user/login',reg);
  }

  // search Flight
  saveBooking(booking: any) :any{
      console.log("saving...."+booking);
      this.currentUrl=this.apiUrl+''+this.userUrl;
      return this.http.post(this.currentUrl+'booking/save',booking).subscribe((data:any)=>{
        console.log("saved Booking successful"+ data);
      });
  }

   // search Flight
   searchFlight(search: Search) :Observable<any>{
    console.log("searching...."+JSON.stringify(search));
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.post(this.currentUrl+'booking/search',search);
}

  fetchFromJourney():Observable<any>{
    console.log("from list....");
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.get(this.currentUrl+'booking/dropdown/from');
  }

  fetchToJourney():Observable<any>{
    console.log("to list....");
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.get(this.currentUrl+'booking/dropdown/to');
  }
  
  bookingHistory():Observable<any>{
    console.log("get history....");
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.get(this.currentUrl+'booking/fetch/history/'+localStorage.getItem('userId'));
    //+this.globalUser.userId);
  }

  kafkaBackup():Observable<any>{
    console.log("get kafka backup....");
    this.currentUrl=this.apiUrl+''+this.adminUrl;
    return this.http.get(this.currentUrl+'reports/');
    //+this.globalUser.userId);
  }

  bookingManage():Observable<any>{
    console.log("get discounts....");
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.get(this.currentUrl+'booking/fetch/'+localStorage.getItem('userId'));
  }
 

  getCoupons():Observable<any>{
    console.log("get discounts....");
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.get(this.currentUrl+'booking/getCoupons');
  }

  cancelBooking(temp: any) {
    console.log("Cancel booking...."+JSON.stringify(temp));
    // this.object.status=temp.status;
    // this.object.bookingId=temp.bookingId;
    this.currentUrl=this.apiUrl+''+this.userUrl;
    return this.http.post(this.currentUrl+'booking/cancel/',temp);
  }
}
