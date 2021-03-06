package com.app.FlightAdmin.Service;

import java.util.List;

import com.app.FlightAdmin.Model.Flight;
import com.app.FlightAdmin.Request.FlightRequest;

public interface FlightService {

	public void saveFlight(Flight flight, int id);

	public List<Flight> fetchAllFlights();

	public Flight processFlightData(FlightRequest req);

}
