package com.app.FlightAdmin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Model.Flight;
import com.app.FlightAdmin.Service.DepartureService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = { "/departure" })
@SuppressWarnings("static-access")
public class DepartureController {

	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;
	
	@Autowired
	DepartureService departureService;
	
	@ApiOperation(value = "Save Departure", notes = "Add departure Details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> saveFlight(@RequestBody Flight flight) {
		try {
			this.departureService.saveFlight(flight);
			return new ResponseEntity<>(message.CREATED, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "ListAll Departures", notes = "Fetch all departure Details")
	@PostMapping(value = "/getAll")
	public ResponseEntity<Object> fetchAllFlights() {
		try {
			List<Airline> res = this.departureService.fetchAllFlights();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
}
