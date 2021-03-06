package com.app.FlightAdmin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FightAdmin.Request.FlightRequest;
import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Service.FlightService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = { "/flight" })
@SuppressWarnings("static-access")
public class FlightController {

	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;
	
	@Autowired
	public FlightService flightService;
	
	@ApiOperation(value = "Save Flight", notes = "Add flight with departure Details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> saveFlight(@RequestBody FlightRequest req) {
		try {
			this.flightService.saveFlight(this.flightService.processFlightData(req),req.getAirlineId());
			return new ResponseEntity<>(message.CREATED, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "ListAll Airlines", notes = "Fetch all airline Details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> fetchAllFlights() {
		try {
			List<Airline> res = this.flightService.fetchAllFlights();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
}
