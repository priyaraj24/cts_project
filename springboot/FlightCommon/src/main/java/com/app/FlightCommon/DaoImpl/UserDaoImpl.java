package com.app.FlightCommon.DaoImpl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightCommon.Dao.UserDao;
import com.app.FlightCommon.Model.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory sessionFactory;

	public void registerUser(User userObj) {
		this.sessionFactory.getCurrentSession().saveOrUpdate(userObj);
	}

	@Override
	public boolean fetchUser(User userObj) {
		int id = ((Number) this.sessionFactory.getCurrentSession().createNativeQuery(
				"select user_id from users where user_name = :username and user_pass= :password and role= :role")
				.setParameter("username", userObj.getUserName()).setParameter("password", userObj.getPassword())
				.setParameter("role", userObj.getRole()).getSingleResult()).intValue();
		return id != 0 ? true : false;
	}

}
