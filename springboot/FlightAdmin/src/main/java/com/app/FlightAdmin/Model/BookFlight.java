package com.app.FlightAdmin.Model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "bookflight")
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookFlight implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private Integer bookingId;

	@Column(name = "pnr_number")
	private String pnrNumber;

	@Column(name = "flight_number")
	private String flightNumber;

	@Column(name = "flight_name")
	private String flightName;

	@Column(name = "fromm")
	private String from;

	@Column(name = "too")
	private String to;

	private Date onwards;

	private Date towards;

	private int price;

	private int seats;

	private String status;

	@Column(name = "user_id")
	private int userId;

	@OneToMany(mappedBy = "book", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
	// @JsonIgnore
	private List<Passenger> passenger;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public List<Passenger> getPassenger() {
		return passenger;
	}

	public void setPassenger(List<Passenger> passenger) {
		// this.passenger = passenger;
		passenger.forEach(v -> v.setBook(this));
		this.passenger = passenger;
	}

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public String getPnrNumber() {
		return pnrNumber;
	}

	public void setPnrNumber(String pnrNumber) {
		this.pnrNumber = pnrNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "BookFlight [bookingId=" + bookingId + ", pnrNumber=" + pnrNumber + ", flightNumber=" + flightNumber
				+ ", flightName=" + flightName + ", from=" + from + ", to=" + to + ", onwards=" + onwards + ", towards="
				+ towards + ", price=" + price + ", seats=" + seats + ", status=" + status + ", userId=" + userId
				+ ", passenger=" + passenger + "]";
	}
	
	

}
