package com.app.FlightUser.ServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightUser.Dao.BookingDao;
import com.app.FlightUser.Model.BookFlight;
import com.app.FlightUser.Model.Passenger;
import com.app.FlightUser.ReqRes.Booking;
import com.app.FlightUser.ReqRes.BookingRequest;
import com.app.FlightUser.Service.BookingService;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingDao bookingDao;

	@Override
	public List<Map> searchFlights(BookingRequest req) {
		return this.bookingDao.searchFlights(req);
	}

	@Override
	public BookFlight processData(BookingRequest req) {
		BookFlight obj=new BookFlight();
		//Booking req=data.getBooking();
		obj.setFlightName(req.getFlightName());
		obj.setUserId(req.getUserId());
		obj.setFlightNumber(req.getFlightNumber());
		obj.setPnrNumber(req.getPnrNumber());
		obj.setFrom(req.getFrom());
		obj.setTo(req.getTo());
		obj.setOnwards(req.getOnwards());
		if(req.getTowards()!=null) {
		obj.setTowards(req.getTowards());
		}
		obj.setPrice(req.getPrice());
		obj.setSeats(req.getSeats());
		obj.setStatus(req.getStatus());
		List<Passenger> list=new ArrayList<Passenger>();
		req.getPassenger().stream().forEach(i->{
			Passenger temp=new Passenger();
			temp.setPassengerName(i.getPassengerName());
			temp.setAge(i.getAge());
			temp.setEmail(i.getEmail());
			temp.setPreferences(i.getPreferences());
			list.add(temp);
		});
		obj.setPassenger(list);
		return obj;
	}

}
