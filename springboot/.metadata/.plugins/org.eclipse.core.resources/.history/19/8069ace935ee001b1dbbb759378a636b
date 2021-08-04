package com.app.FlightAdmin.DaoImpl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightAdmin.Dao.AirlineDao;
import com.app.FlightAdmin.Model.Airline;

@Repository
@Transactional
public class AirlineDaoImpl implements AirlineDao {

	@Autowired
	SessionFactory sessionFactory;

	public void saveAirline(Airline airline) {
		this.sessionFactory.getCurrentSession().saveOrUpdate(airline);
	}

	@Override
	public List<Airline> getAllAirlines() {
		try {
			// return
			// sessionFactory.getCurrentSession().createCriteria(Airline.class).list();
			return sessionFactory.getCurrentSession().createQuery("SELECT a FROM Airline a", Airline.class)
					.getResultList();
		} catch (Exception e) {
			return new ArrayList<>();
		}
	}

	public Airline findById(int airlineId) {
		Session session = sessionFactory.getCurrentSession();
		Airline airline = (Airline) session.get(Airline.class, airlineId);
		return airline;
	}

	public boolean delete(Airline airline) {
		try {
			if (airline != null) {
				this.sessionFactory.getCurrentSession().delete(airline);
				return true;
			} else {
				return false;
			}
		} catch (Exception ex) {
			System.out.println("Err in airline Deletion :" + ex);
			return false;
		}
	}
}
