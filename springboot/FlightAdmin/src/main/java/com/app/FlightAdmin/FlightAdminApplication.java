package com.app.FlightAdmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
//@ComponentScan(basePackages = { "com.app.FlightAdmin" })
//@EntityScan(basePackages = { "com.app.FlightAdmin" })
@SpringBootApplication(exclude = { HibernateJpaAutoConfiguration.class })
public class FlightAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightAdminApplication.class, args);
	}
	
	


}
