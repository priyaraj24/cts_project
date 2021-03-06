package com.app.FlightAdmin.Dao;

import java.util.List;

import com.app.FlightAdmin.Model.Airline;

public interface AirlineDao {

	public void saveAirline(Airline airline);

	public List<Airline> getAllAirlines();

	public Airline findById(int airlineId);

	public boolean delete(Airline airlineId);
}
