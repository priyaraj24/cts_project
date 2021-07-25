package com.app.FlightCommon.Dao;

import com.app.FlightCommon.Model.User;

public interface UserDao {

	public void registerUser(User userObj);

	public boolean fetchUser(User userObj);

}
