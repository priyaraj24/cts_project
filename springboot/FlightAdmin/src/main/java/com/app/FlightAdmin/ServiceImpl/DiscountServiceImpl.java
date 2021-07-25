package com.app.FlightAdmin.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FlightAdmin.Dao.DiscountDao;
import com.app.FlightAdmin.Model.Discount;
import com.app.FlightAdmin.Service.DiscountService;

@Service
public class DiscountServiceImpl implements DiscountService {
	
	@Autowired
	DiscountDao discountDao;

	@Override
	public void saveDiscount(Discount discount) {
		this.discountDao.saveDiscount(discount);
	}

	@Override
	public List<Discount> fetchAllDiscounts() {
		return this.discountDao.fetchAllDiscounts() ;
	}

}
