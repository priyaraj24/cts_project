package com.app.FlightBooking.Controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightBooking.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
//@RequestMapping(value = { "/airlines" })
public class AirlineController {

	@Autowired
	public ResponseMessageUtil responseMessage;

	@GetMapping(value = "/ping")
	public String test() {
		return "haiii";
	}

	@ApiOperation(value = "Save Airlines", notes = "Add airline with flight and departure Details")
	@PostMapping(value = "/checkData")
	public ResponseEntity<Object> checkData(@RequestBody String a, HttpServletRequest httprequest) {
		try {
			// EsResponse response = accountService.checkData(accountRequest, httprequest);
			return new ResponseEntity<>("hai", HttpStatus.OK);
		} catch (Exception e) {

			return this.responseMessage.errorResponse(e, "Server Error");

		}
	}
}
