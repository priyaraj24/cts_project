package com.app.FlightAdmin.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.FlightAdmin.Model.Flight;

public interface FlightRepo  extends JpaRepository<Flight, Integer>{         

}
