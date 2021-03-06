package com.demo.security.service;

import com.demo.security.reqres.User;
import com.demo.security.reqres.UserWrapper;

public interface UserService {

	public void registerUser(User userObj);

	public User login(User userObj);

	public UserWrapper findByUsername(String username);

	public boolean checkAccountType(String username, String role);

}
