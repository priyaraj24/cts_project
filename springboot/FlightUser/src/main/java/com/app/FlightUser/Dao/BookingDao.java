package com.app.FlightUser.Dao;

import java.util.List;
import java.util.Map;

import com.app.FlightUser.Model.BookFlight;
import com.app.FlightUser.Model.Discount;
import com.app.FlightUser.ReqRes.BookingRequest;
import com.app.FlightUser.ReqRes.BookingResponse;

public interface BookingDao {

	List<Map> searchFlights(BookingRequest req);

	List<String> dropDown();

	public List<String> dropDown1();

	List<Discount> getAllDiscounts();

	boolean updateBookingStatus(BookingResponse req);

	List<BookFlight> fetchHistory(int id);

	List<BookFlight> fetchBookings(int id);

	void updateTravelled();

	void save(BookFlight req);

}
