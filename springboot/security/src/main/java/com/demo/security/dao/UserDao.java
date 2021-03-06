package com.demo.security.dao;

import com.demo.security.reqres.User;
import com.demo.security.reqres.UserWrapper;

public interface UserDao {

	public void registerUser(User userObj);

	public User fetchUser(User userObj);

	public UserWrapper findByUsername(String username);

	public boolean checkAccountType(String username, String accountType);

}
