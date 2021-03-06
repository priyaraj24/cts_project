package com.app.FlightAdmin.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Model.User;
import com.app.FlightAdmin.Service.UserService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = { "/user" })
@SuppressWarnings("static-access")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;

	@Autowired
	UserService userService;

	@ApiOperation(value = "Ping", notes = "Ping Url")
	@GetMapping(value = "/ping")
	public String test() {
		return "haiii";
	}

	@ApiOperation(value = "Add User", notes = "Register new user with username,password and role")
	@PostMapping(value = "/register")
	public ResponseEntity<Object> register(@RequestBody User userObj) {
		Map<String,String> map=new HashMap<>();
		try {
			this.userService.registerUser(userObj);
			map.put("message", "Success");
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse( e, message.SERVER_ERROR);
		}
	}
	
	@ApiOperation(value = "Add User", notes = "Register new user with username,password and role")
	@PostMapping(value = "/login")
	public ResponseEntity<Object> login(@RequestBody User userObj) {
		Map<String,Object> map=new HashMap<>();
		try {
			User flag=this.userService.login(userObj);
			System.out.println(flag);
			if(flag!=null) {
				map.put("message", "Success");
				map.put("user", flag);
			}
			else {
				map.put("message", "Failure");
			}
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse( e, message.SERVER_ERROR);
		}
	}
	
	public static void main(String[] args) {
		
	}
}
