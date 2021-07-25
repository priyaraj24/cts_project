create database flightbooking;
Use flightbooking;
 CREATE TABLE users(  
    user_id int NOT NULL AUTO_INCREMENT,  
    user_name varchar(45) NOT NULL,  
    user_pass varchar(35) NOT NULL,  
    role  varchar(35) NOT NULL,  
    PRIMARY KEY (user_id)  
);  

 CREATE TABLE discount(  
    discount_id int NOT NULL AUTO_INCREMENT,  
    discount_name varchar(45) NOT NULL,  
    discount_code varchar(35) NOT NULL,  
    price  int NOT NULL,  
    PRIMARY KEY (discount_id)  
);  

CREATE TABLE airline(  
    airline_id int NOT NULL AUTO_INCREMENT,  
    airline_name varchar(45) NOT NULL,  
    contact_address varchar(250) NOT NULL,  
    contact_number int NOT NULL,  
    logo varchar(250) NOT NULL,  
    PRIMARY KEY (airline_id)  
);  


CREATE TABLE flight (
flight_id INT PRIMARY KEY,
flight_name VARCHAR(100) NOT NULL,
flight_number VARCHAR(100) NOT NULL,
airline_id INT,
FOREIGN KEY (airline_id) 
REFERENCES airline(airline_id)
);

CREATE TABLE departure_details (
departure_id INT PRIMARY KEY,
departure_from VARCHAR(100) NOT NULL,
departure_to VARCHAR(100) NOT NULL,
arrival datetime NOT NULL,
departure datetime NOT NULL,
price int NOT NULL,
flight_id INT,
FOREIGN KEY (flight_id) 
REFERENCES flight(flight_id)
);