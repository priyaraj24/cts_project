package com.app.FlightAdmin.Service;

import com.app.FlightAdmin.Model.User;

public interface UserService {

	public void registerUser(User userObj);

	public User login(User userObj);

}
