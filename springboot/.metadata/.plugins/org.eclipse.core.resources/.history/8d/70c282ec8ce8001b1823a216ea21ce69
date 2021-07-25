package com.app.FlightAdmin.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightAdmin.Dao.DepartureDao;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Model.Flight;
import com.app.FlightAdmin.Service.DepartureService;

@Service
public class DepartureServiceImpl implements DepartureService {

	@Autowired
	DepartureDao departureDao;

	@Override
	public void saveFlight(Flight flight) {
		this.departureDao.saveFlight(flight);
	}

	@Override
	public List<Airline> fetchAllFlights() {
		return null;
	}
}
