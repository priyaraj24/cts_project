package com.app.FlightBooking.Util;

import org.springframework.http.ResponseEntity;

public interface ResponseMessageUtil {
	public ResponseEntity<Object> errorResponse(Exception e, String message);

	public ResponseEntity<Object> dataInsertedResponse(String message);

	public ResponseEntity<Object> dataDeletedResponse(String message);

	public ResponseEntity<Object> badRequestResponse(String message);
}
