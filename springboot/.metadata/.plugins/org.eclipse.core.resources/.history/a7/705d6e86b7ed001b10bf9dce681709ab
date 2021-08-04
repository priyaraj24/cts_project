package com.app.FlightAdmin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Dao.FlightDao;
import com.app.FlightAdmin.Model.Flight;
import com.app.FlightAdmin.Request.FlightRequest;
import com.app.FlightAdmin.Service.FlightService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = { "/flight" })
@SuppressWarnings("static-access")
@CrossOrigin(origins = "http://localhost:4200")
public class FlightController {

	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;

	@Autowired
	public FlightService flightService;

	@Autowired
	public FlightDao dao;

	@ApiOperation(value = "Save Flight", notes = "Add flight with departure Details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> saveFlight(@RequestBody FlightRequest req) {
		try {
			this.flightService.saveFlight(this.flightService.processFlightData(req), req.getAirlineId());
			return new ResponseEntity<>(message.CREATED, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "ListAll Flights", notes = "Fetch all flight Details")
	@PostMapping(value = "/getAll")
	public ResponseEntity<Object> fetchAllFlights() {
		try {
			List<Flight> res = this.flightService.fetchAllFlights();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "Delete Flight", notes = "Fetch flight details by flightId and delete Object")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable(value = "id") Long flightId) {
		boolean isRemoved = dao.delete(this.dao.findById(flightId));
		if (!isRemoved) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(flightId, HttpStatus.OK);
	}
}
