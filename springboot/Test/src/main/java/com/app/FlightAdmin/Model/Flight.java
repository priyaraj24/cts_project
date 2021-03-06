package com.app.FlightAdmin.Model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "flight")
public class Flight implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "flight_id")
	private int flightId;

	@Column(name = "flight_name")
	private String flightName;
	
	@Column(name = "flight_number")
	private String flightNumber;
	
	
	@OneToMany(mappedBy = "flight", cascade = CascadeType.ALL,fetch=FetchType.LAZY, orphanRemoval = true)
	private List<Departure> departure;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(referencedColumnName = "airline_id", name = "airline_id")
	private Airline airline;

	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public List<Departure> getDeparture() {
		return departure;
	}

	public void setDeparture(List<Departure> departure) {
		this.departure = departure;
	}

	public Airline getAirline() {
		return airline;
	}

	public void setAirline(Airline airline) {
		this.airline = airline;
	}
	
	
	
}
