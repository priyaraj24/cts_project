package com.app.FlightAdmin.Dao;

import com.app.FlightAdmin.Model.Flight;

public interface FlightDao {

	public void saveFlight(Flight flight, int airlineI);

}
