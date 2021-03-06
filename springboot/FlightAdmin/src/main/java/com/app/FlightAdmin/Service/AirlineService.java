package com.app.FlightAdmin.Service;

import java.util.List;

import com.app.FlightAdmin.Model.Airline;

public interface AirlineService {

	public void saveAirline(Airline airline);

	public List<Airline> fetchAllAirlines();

	public void updateAirline(Airline airline);

}
