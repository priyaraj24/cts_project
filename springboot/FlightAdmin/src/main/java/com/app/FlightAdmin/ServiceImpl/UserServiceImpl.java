package com.app.FlightAdmin.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightAdmin.Dao.UserDao;
import com.app.FlightAdmin.Model.User;
import com.app.FlightAdmin.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	public void registerUser(User userObj) {
		this.userDao.registerUser(userObj);
	}
	
	public User login(User userObj) {
		return this.userDao.fetchUser(userObj);
	}
}
