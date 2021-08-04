package com.app.FlightCommon.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/")
@SuppressWarnings({ "static-access", "rawtypes" })
@CrossOrigin(origins = "http://localhost:4200")
public class SampleController {

	@ApiOperation(value = "Ping", notes = "Ping Url")
	@GetMapping(value = "/ping")
	public String test() {
		return "haiii";
	}

}
