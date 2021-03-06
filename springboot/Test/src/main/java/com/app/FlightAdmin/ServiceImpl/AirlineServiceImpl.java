package com.app.FlightAdmin.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightAdmin.Dao.AirlineDao;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Service.AirlineService;

@Service
public class AirlineServiceImpl implements AirlineService {

	@Autowired
	AirlineDao airlineDao;

	public void saveAirline(Airline airline) {
		this.airlineDao.saveAirline(airline);
	}

	@Override
	public List<Airline> fetchAllAirlines() {
		return this.airlineDao.getAllAirlines();
	}

}
