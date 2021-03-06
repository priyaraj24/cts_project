package com.app.FlightUser.ReqRes;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class BookingRequest {

	private String type;

	private String from;

	private int userId;

	private String to;

	private Date onwards;

	@JsonIgnore
	private Date towards;

	private String pnrNumber;

	private int price;

	private int seats;

	private String status;

	private String flightNumber;

	private String flightName;

	private List<PassengerReq> passenger;

	private Booking booking;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getPnrNumber() {
		return pnrNumber;
	}

	public void setPnrNumber(String pnrNumber) {
		this.pnrNumber = pnrNumber;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<PassengerReq> getPassenger() {
		return passenger;
	}

	public void setPassenger(List<PassengerReq> passenger) {
		this.passenger = passenger;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public Date getOnwards() {
		return onwards;
	}

	public void setOnwards(Date onwards) {
		this.onwards = onwards;
	}

	public Date getTowards() {
		return towards;
	}

	public void setTowards(Date towards) {
		this.towards = towards;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

}
