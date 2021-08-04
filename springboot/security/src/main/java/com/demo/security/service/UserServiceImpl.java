package com.demo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.security.dao.UserDao;
import com.demo.security.reqres.User;
import com.demo.security.reqres.UserWrapper;

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

	@Override
	public UserWrapper findByUsername(String username) {
		return this.userDao.findByUsername(username);
	}

	@Override // check whether given account type matches with user data
	public boolean checkAccountType(String username, String accountType) {
		return userDao.checkAccountType(username, accountType);
	}
}
