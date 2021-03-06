package com.app.FlightAdmin.DaoImpl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightAdmin.Dao.DepartureDao;
import com.app.FlightAdmin.Model.Flight;

@Repository
@Transactional
public class DepartureDaoImpl implements DepartureDao {
	
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void saveFlight(Flight flight) {
		this.sessionFactory.getCurrentSession().saveOrUpdate(flight);
	}

}
