package com.app.FlightAdmin.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FightAdmin.Request.FlightRequest;
import com.app.FlightAdmin.Dao.FlightDao;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Model.Flight;
import com.app.FlightAdmin.Service.FlightService;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	FlightDao FlightDao;

	@Override
	public void saveFlight(Flight flight, int id) {
		this.FlightDao.saveFlight(flight, id);
	}

	@Override
	public List<Airline> fetchAllFlights() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Flight processFlightData(FlightRequest req) {
		Flight obj = new Flight();
		obj.setDeparture(new ArrayList<>());
		obj.setFlightName(req.getFlightName());
		obj.setFlightNumber(req.getFlightNumber());
		return obj;
	}

}
