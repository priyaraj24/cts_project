package com.app.FlightAdmin.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.FlightAdmin.Constants.ResponseMessage;
import com.app.FlightAdmin.Model.BookFlight;
import com.app.FlightAdmin.Service.AirlineService;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = { "/" })
@SuppressWarnings("static-access")
@CrossOrigin(origins = "http://localhost:4200")
public class ReportController {

	private static final String TOPIC = "bookflight";

	@Autowired
	public ResponseMessageUtil responseUtil;

	@Autowired
	public ResponseMessage message;
	
	@Autowired
	public AirlineService service;

	@ApiOperation(value = "Fetch Bookings from kafka", notes = "Get all flight Bookings from kafka Producer")
	@GetMapping(value = "/reports")
	//@KafkaListener(topics = TOPIC, groupId = "group_id", containerFactory = "userKafkaListenerFactory")
	public ResponseEntity<Object> fetchBookings() {
		Map<String, Object> res = new HashMap<>();
		try {
//			BookFlight flight =new BookFlight();
//			flight= bookings;
			//sString inst = "{\"bookingId\":null,\"pnrNumber\":\"PNR_AVlNV\",\"flightNumber\":\"FLY_25\",\"flightName\":\"AIR fly\",\"from\":\"Delhi\",\"to\":\"Chennai\",\"onwards\":1628208000000,\"towards\":null,\"price\":4000,\"seats\":1,\"status\":\"BOOKED\",\"userId\":3,\"passenger\":[{\"passengerId\":null,\"passengerName\":\"priya\",\"age\":24,\"preferences\":\"Economy\",\"email\":\"priya@gmail.com\"}]}";
			//System.out.println("KAFKA --- booking data " + bookings);
			
			List<BookFlight> list= this.service.callKafkaData();
			System.out.println("Kafka Data : "+list);
			res.put("bookings", list);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return this.responseUtil.errorResponse(e, message.SERVER_ERROR);
		}
	}

}
