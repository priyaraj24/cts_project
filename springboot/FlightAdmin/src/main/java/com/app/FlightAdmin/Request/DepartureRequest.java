package com.app.FlightAdmin.Request;

import java.util.Date;

public class DepartureRequest {

	private int flightId;

	private String from;

	private String to;

	private String departureFrom;

	private String departureTo;

	private Date departure;

	private Date arrival;

	private int price;

	private int departureId;

	public int getDepartureId() {
		return departureId;
	}

	public void setDepartureId(int departureId) {
		this.departureId = departureId;
	}

	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public Date getDeparture() {
		return departure;
	}

	public void setDeparture(Date departure) {
		this.departure = departure;
	}

	public Date getArrival() {
		return arrival;
	}

	public void setArrival(Date arrival) {
		this.arrival = arrival;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDepartureFrom() {
		return departureFrom;
	}

	public void setDepartureFrom(String departureFrom) {
		this.departureFrom = departureFrom;
	}

	public String getDepartureTo() {
		return departureTo;
	}

	public void setDepartureTo(String departureTo) {
		this.departureTo = departureTo;
	}
	
	

}
