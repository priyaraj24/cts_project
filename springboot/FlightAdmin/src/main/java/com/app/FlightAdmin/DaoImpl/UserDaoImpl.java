package com.app.FlightAdmin.DaoImpl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.FlightAdmin.Dao.UserDao;
import com.app.FlightAdmin.Model.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory sessionFactory;

	public void registerUser(User userObj) {
		this.sessionFactory.getCurrentSession().saveOrUpdate(userObj);
	}

	@Override
	public User fetchUser(User userObj) {
		try {
			User user = (User) this.sessionFactory.getCurrentSession().createQuery(
					"SELECT u from User u where u.userName = :username AND u.password= :password AND u.role= :role")
					.setParameter("username", userObj.getUserName()).setParameter("password", userObj.getPassword())
					.setParameter("role", userObj.getRole()).getSingleResult();
			return user;
		} catch (Exception ex) {
			System.out.println("ERR USer :"+ex);
			return null;
		}
	}

}
