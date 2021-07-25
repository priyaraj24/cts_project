package com.app.FlightBooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication(exclude = { HibernateJpaAutoConfiguration.class })
@ComponentScan(basePackages = { "com.app.FlightBooking" })
@EntityScan(basePackages = { "com.app.FlightBooking" })
public class UserApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(UserApplication.class);
	}

}
