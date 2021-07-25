package com.app.FlightAdmin.DaoImpl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightAdmin.Dao.FlightDao;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Model.Flight;

@Repository
@Transactional
public class FlightDaoImpl implements FlightDao {

	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void saveFlight(Flight flight, int airlineId) {
		Session session = sessionFactory.getCurrentSession();
		Airline p = (Airline) session.load(Airline.class, airlineId);
		flight.setAirline(p);
//	    List<Flight> c = new ArrayList<>();
//	    c.stream().forEach(temp->{ 
//	    	temp.setAirline(p);
//	    	});
		p.getFlights().add(flight);
		session.save(flight);
		session.flush();
		// this.sessionFactory.getCurrentSession().saveOrUpdate(flight);
	}

}
