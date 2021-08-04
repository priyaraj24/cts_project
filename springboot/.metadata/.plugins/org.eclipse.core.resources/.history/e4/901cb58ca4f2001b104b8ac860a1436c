package com.demo.security.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	// hard coded username is used here not database....
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("priya".equals(username)) {
			return new User("priya", 
					//password
					//"$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					"$2a$10$8zOxOZKBoBHvCJrkrHK2nu8MXkuLrILdEEDCBJ26505DzCbASEkYO",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}