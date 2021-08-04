package com.app.FlightUser.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightUser.Constants.ResponseMessage;
import com.app.FlightUser.Dao.BookingDao;
import com.app.FlightUser.Model.BookFlight;
import com.app.FlightUser.Model.Discount;
import com.app.FlightUser.ReqRes.BookingRequest;
import com.app.FlightUser.ReqRes.BookingResponse;
import com.app.FlightUser.Service.BookingService;
import com.app.FlightUser.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/booking")
@SuppressWarnings({"static-access","rawtypes"})
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

	@Autowired
    private KafkaTemplate<String, BookFlight> kafkaTemplate;
	
	private static final String TOPIC = "bookflight";
	
	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;

	@Autowired
	public BookingService bookingService;

	@Autowired
	public BookingDao dao;

	@ApiOperation(value = "Ping", notes = "Ping Url")
	@GetMapping(value = "/ping")
	public String test() {
		return "haiii";
	}

	@ApiOperation(value = "Search flights", notes = "fetch flight and departure based on search")
	@PostMapping(value = "/search")
	@Cacheable(value = "search")
	public ResponseEntity<Object> fetchAllflightNames(@RequestBody BookingRequest req) {
		Map<String, Object> result = new HashMap<>();
		try {
			List<Map> res = new ArrayList<>();
			res = this.bookingService.searchFlights(req);
			result.put("search", res);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	@ApiOperation(value = "save booking", notes = "save booking with passenger details")
	@PostMapping(value = "/save")
	public ResponseEntity<Object> save(@RequestBody BookingRequest req) {
		Map<String, Object> result = new HashMap<>();
		try {
			BookFlight bookflight = new BookFlight();
			bookflight= this.bookingService.processData(req);
			this.dao.save(bookflight);
			BookFlight kafka=new BookFlight();
			kafka=bookflight;
			kafka.setBookingId(0);
			kafka.getPassenger().stream().forEach(i-> i.setPassengerId(0));
			// save data in kafka
	        kafkaTemplate.send(TOPIC, kafka);

			
			result.put("message", "Success");
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "from drop down", notes = "Fetch all journey from data")
	@GetMapping(value = "/dropdown/from")
	@Cacheable(value = "fromjourney")
	public ResponseEntity<Object> dropDown() {
		try {
			List<String> res = new ArrayList<>();
			res = this.dao.dropDown();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	@ApiOperation(value = "from drop down", notes = "Fetch all journey from data")
	@GetMapping(value = "/dropdown/to")
	@Cacheable(value = "tojourney")
	public ResponseEntity<Object> dropDown1() {
		try {
			List<String> res = new ArrayList<>();
			res = this.dao.dropDown1();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "getAll coupons", notes = "apply discounts ")
	@GetMapping(value = "/getCoupons")
	@Cacheable(value = "coupons")
	public ResponseEntity<Object> getCoupons() {
		try {
			List<Discount> res = new ArrayList<>();
			res = this.dao.getAllDiscounts();
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

	@ApiOperation(value = "cancel  booking", notes = "cancel my booking")
	@PostMapping(value = "/cancel")
	public ResponseEntity<Object> getCoupons(@RequestBody BookingResponse req) {
		Map<String, String> map = new HashMap<String, String>();
		try {

			boolean res = this.dao.updateBookingStatus(req);
			if (res == true) {
				map.put("message", "Success");
			} else {
				map.put("message", "Failure");
			}
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	
	@ApiOperation(value = "fetch all bookings", notes = "Fetch all booking Details")
	@GetMapping(value = "/fetch/{id}")
	@Cacheable(value = "managebookings")
	public ResponseEntity<Object> fetchBookings(@PathVariable int id) {
		Map<String,Object> res=new HashMap<>();
		try {
			List<BookFlight> result = new ArrayList<>();
			result= this.dao.fetchBookings(id);
			res.put("bookings", result);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}
	
	@ApiOperation(value = "fetch all history of bookings", notes = "Fetch all booking history Details")
	@GetMapping(value = "/fetch/history/{id}")
	@Cacheable(value = "bookinghistory")
	public ResponseEntity<Object> fetchHistory(@PathVariable int id) {
		Map<String,Object> res=new HashMap<>();
		try {
			List<BookFlight> result = new ArrayList<>();
			result= this.dao.fetchHistory(id);
			res.put("history", result);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}


}
