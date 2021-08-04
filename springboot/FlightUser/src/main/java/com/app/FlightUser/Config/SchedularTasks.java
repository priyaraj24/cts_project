//package com.app.FlightUser.Config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//
//import com.app.FlightUser.Dao.BookingDao;
//
//@Component
//public class SchedularTasks {
//
//	boolean checkCronState = true;
//	@Autowired
//	BookingDao dao;
//
//	// every hour 10th minute 10 * * * *
//	@Scheduled(cron = "0 10 * * * *")
//	public void MysqlToSummaryMigration() {
//		if (checkCronState) {
//			try {
//				dao.updateTravelled();
//			} catch (Exception ex) {
//				System.err.println("Mysql to Mysql Summary Migration " + ex.getMessage());
//
//			}
//		}
//	}
//
//}
