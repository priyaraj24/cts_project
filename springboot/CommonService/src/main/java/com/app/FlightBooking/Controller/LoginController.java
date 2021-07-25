package com.app.FlightBooking.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightBooking.Model.User;
import com.app.FlightBooking.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
public class LoginController {

	@Autowired
	public ResponseMessageUtil responseMessage;

	@GetMapping(value = "/ping")
	public String test() {
		return "haiii";
	}

	@ApiOperation(value = "Register User / Admin", notes = "Based on role Register User / Admin")
	@PostMapping(value = "/register")
	public ResponseEntity<Object> checkData(@RequestBody User register) {
		try {
			
			return new ResponseEntity<>("hai", HttpStatus.OK);
		} catch (Exception e) {

			return this.responseMessage.errorResponse(e, "Server Error");

		}
	}
}
