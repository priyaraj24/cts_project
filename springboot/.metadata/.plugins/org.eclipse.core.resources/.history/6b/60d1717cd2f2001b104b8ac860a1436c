package com.app.FlightUser.Util;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@SuppressWarnings({ "unchecked", "rawtypes" })
@Component
public class ResponseMessageUtilImpl implements ResponseMessageUtil {

	@Override
	public ResponseEntity<Object> errorResponse(Exception e, String message) {
		e.printStackTrace();
		Map<String, Object> resp = new HashMap();
		resp.put("statusCode : ", HttpStatus.INTERNAL_SERVER_ERROR.value());
		resp.put("Message : ", message);
		resp.put("Exception message : ", e.getMessage());
		return new ResponseEntity<>(resp, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@Override
	public ResponseEntity<Object> dataInsertedResponse(String message) {
		Map<String, Object> resp = new HashMap();
		resp.put("statusCode", HttpStatus.CREATED.value());
		resp.put("Message : ", message);
		return new ResponseEntity<>(resp, HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Object> dataDeletedResponse(String message) {
		Map<String, Object> resp = new HashMap();
		resp.put("statusCode", HttpStatus.NO_CONTENT.value());
		resp.put("Message : ", message);
		return ResponseEntity.ok().body(resp);
	}

	@Override
	public ResponseEntity<Object> badRequestResponse(String message) {
		Map<String, Object> resp = new HashMap<>();
		resp.put("statusCode", HttpStatus.BAD_REQUEST.value());
		resp.put("Message : ", message);
		return new ResponseEntity<>(resp, HttpStatus.BAD_REQUEST);
	}

}
