package com.demo.security.util;

import org.springframework.stereotype.Component;

@Component
public class ResponseMessage {
	public static final String CREATED = "Record Successfully Created";
	public static final String UPDATED = "Record Updated Successfully";
	public static final String DELETED = "Record Successfully Deleted";
	public static final String SERVER_ERROR = "Server Error";
	public static final String BAD_REQUEST = "Bad Request";
}
