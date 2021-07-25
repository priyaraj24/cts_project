package com.app.FlightCommon.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightCommon.Dao.UserDao;
import com.app.FlightCommon.Model.User;
import com.app.FlightCommon.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	public void registerUser(User userObj) {
		this.userDao.registerUser(userObj);
	}
	
	public void login(User userObj) {
		boolean flag =this.userDao.fetchUser(userObj);
	}
}
