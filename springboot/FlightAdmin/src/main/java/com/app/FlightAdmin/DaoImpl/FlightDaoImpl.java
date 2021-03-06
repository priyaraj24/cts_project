package com.app.FlightAdmin.DaoImpl;

import java.util.ArrayList;
import java.util.List;

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
		p.getFlights().add(flight);
		session.save(flight);
		session.flush();
		// this.sessionFactory.getCurrentSession().saveOrUpdate(flight);
	}

	public Flight findById(Long flightId) {
		Session session = sessionFactory.getCurrentSession();
		Flight fi = (Flight) session.load(Flight.class, flightId);
		return fi;
	}

	public boolean delete(Flight airlineId) {
		try {
			this.sessionFactory.getCurrentSession().delete(airlineId);
			return true;
		} catch (Exception ex) {
			System.out.println("Err in flight Deletion :" + ex);
			return false;
		}
	}
	
	@Override
	public List<Flight> getAllAirlines() {
		try {
			// return sessionFactory.getCurrentSession().createCriteria(Airline.class).list();
			return sessionFactory.getCurrentSession().createQuery("SELECT a FROM Flight a", Flight.class)
					.getResultList();
		} catch (Exception e) {
			return new ArrayList<>();
		}
	}

}
