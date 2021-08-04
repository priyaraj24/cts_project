package com.demo.security.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.Query;
import com.demo.security.reqres.User;
import com.demo.security.reqres.UserWrapper;

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
			System.out.println("ERR USer :" + ex);
			return null;
		}
	}

	@Override
	public UserWrapper findByUsername(String username) {
		try {
			User user = (User) this.sessionFactory.getCurrentSession()
					.createQuery("SELECT u from User u where u.userName = :username").setParameter("username", username)
					.getSingleResult();
			UserWrapper userWrapper = new UserWrapper();
			userWrapper.setUserId(user.getUserId());
			userWrapper.setUsername(user.getUserName());
			userWrapper.setPassword(user.getPassword());
			userWrapper.setRole(user.getRole());
			return userWrapper;
		} catch (Exception ex) {
			System.out.println("ERR USer :" + ex);
			return null;
		}
	}

	@Override // check whether user is matching with given account type
	public boolean checkAccountType(String username, String role) {

		StringBuilder queryBuilder = new StringBuilder();
		String query = queryBuilder.append(" select count(user_id)>0 from users  ")
				.append(" where user_name=:username and role=:role").toString();
		Query checkQuery = sessionFactory.getCurrentSession().createNativeQuery(query);
		checkQuery.setParameter("role", role);
		checkQuery.setParameter("username", username);
		int status = ((Number) checkQuery.getSingleResult()).intValue();
		System.out.println("user present count :" + status);
		return status == 1 ? true : false;
	}

}
