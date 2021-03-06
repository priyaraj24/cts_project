package com.app.FlightUser.Model;

import java.io.Serializable;
import java.util.ArrayList;
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
	private Integer flightId;

	@Column(name = "flight_name")
	private String flightName;
	
	@Column(name = "flight_number")
	private String flightNumber;
	
	
	@OneToMany(mappedBy = "flight", cascade = CascadeType.ALL,fetch=FetchType.EAGER, orphanRemoval = true)
	private List<Departure> departure;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(referencedColumnName = "airline_id", name = "airline_id")
	private Airline airline;

	public Integer getFlightId() {
		return flightId;
	}

	public void setFlightId(Integer flightId) {
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
		//this.departure = departure;
		if (departure.size() > 0) {
			this.departure = departure;
		} else if (departure == null || departure.size() == 0) {
			this.departure = new ArrayList<Departure>();
		} else if (this.departure != null) {
			this.departure.addAll(departure);
		}
	}

	public Airline getAirline() {
		return airline;
	}

	public void setAirline(Airline airline) {
		this.airline = airline;
	}
	
	
	
}
