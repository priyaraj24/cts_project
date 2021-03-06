package com.app.FlightAdmin.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Dao.AirlineDao;
import com.app.FlightAdmin.Model.Airline;
import com.app.FlightAdmin.Service.AirlineService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/airlines")
@SuppressWarnings("static-access")
@CrossOrigin(origins = "http://localhost:4200")
public class AirlineController {
	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;

	@Autowired
	public AirlineService airlineService;

	@Autowired
	public AirlineDao dao;

	@ApiOperation(value = "Ping", notes = "Ping Url")
	@GetMapping("/ping")
	public String test() {
		return "haiii";
	}

	@ApiOperation(value = "Save Airlines", notes = "Add airline with flight and departure Details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> saveAirline(@RequestBody Airline airline) {
		Map<String,String> res= new HashMap<>();
		try {
			this.airlineService.saveAirline(airline);
			res.put("message", "SUCCESS");
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	@ApiOperation(value = "Update Airlines", notes = "update airline Details by Id")
	@PostMapping(value = "/update")
	public ResponseEntity<Object> updateAirline(@RequestBody Airline airline) {
		Map<String,String> res= new HashMap<>();
		try {
			this.airlineService.updateAirline(airline);
			res.put("message", "SUCCESS");
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}


	@ApiOperation(value = "ListAll Airlines", notes = "Fetch all airline Details")
	@GetMapping(value = "/fetch")
	public ResponseEntity<Object> fetchAllAirlines() {
		Map<String,Object> result= new HashMap<>();
		try {
			List<Airline> res = new ArrayList<Airline>();
			res = this.airlineService.fetchAllAirlines();
			result.put("airlines", res);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	@ApiOperation(value = "ListAll Airlines Names", notes = "Fetch all airline names from Details")
	@GetMapping(value = "/fetch/AirlineNames")
	public ResponseEntity<Object> fetchAllAirlineName() {
		List<Map<String,Object>> result= new ArrayList<>();
		Map<String,Object> finalData= new HashMap<>();
		try {
			List<Airline> res = new ArrayList<Airline>();
			res = this.airlineService.fetchAllAirlines();
			res.stream().forEach(x->
			{
				Map<String,Object> temp= new HashMap<>();
				temp.put("id", x.getAirlineId());
				temp.put("label", x.getAirlineName());
				result.add(temp);
			});
			//finalData.put("dropdown", result);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	
	@ApiOperation(value = "fetch Airline Name", notes = "Fetch airline name by airline id")
	@GetMapping(value = "/fetch/{id}")
	public ResponseEntity<Object> fetchAirlineName(@PathVariable(value = "id") int airlineId) {
		Map<String,String> result= new HashMap<>();
		try {
			Airline res = new Airline();
			res =this.dao.findById(airlineId);
			result.put("name", res.getAirlineName());
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "Delete Airline", notes = "Fetch airline details by airlineId and delete Object")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable(value = "id") int airlineId) {
		boolean isRemoved = dao.delete(this.dao.findById(airlineId));
		Map<String,String> res= new HashMap<>();
		if (!isRemoved) {
			res.put("message", "Not Found");
			return new ResponseEntity<>(res,HttpStatus.NOT_FOUND);
		}
		res.put("message", "Success");
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
}
