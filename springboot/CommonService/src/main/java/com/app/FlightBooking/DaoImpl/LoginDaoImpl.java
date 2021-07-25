package com.app.FlightBooking.DaoImpl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightBooking.Dao.LoginDao;

@Repository
@Transactional
public class LoginDaoImpl implements LoginDao {

	@Autowired
	private SessionFactory sessionFactory;
}
