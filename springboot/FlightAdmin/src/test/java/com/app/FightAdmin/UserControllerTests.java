package com.app.FightAdmin;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.app.FlightAdmin.Controller.UserController;
import com.app.FlightAdmin.Dao.UserDao;
import com.app.FlightAdmin.Model.User;
import com.app.FlightAdmin.Util.ResponseMessageUtil;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
@SuppressWarnings("unchecked")
class UserControllerTests {

	//Example link -- https://howtodoinjava.com/spring-boot2/testing/rest-controller-unit-test-example/
	
	@InjectMocks
	UserController userController;

	@Mock
	UserDao userDao;

	@Mock
	ResponseMessageUtil util;

	@Mock
	ResponseEntity<Object> responseEntity;

	@BeforeEach
	void setUp() throws Exception {
	}

	@Test
	void testRegister() {
		User userObj = new User();
		when(userDao.fetchUser(userObj)).thenReturn(userObj);

		responseEntity = userController.login(new User());
		Map<String, Object> response = new HashMap<>();
		// success
		response = (Map<String, Object>) responseEntity.getBody();

		// failure
		util = (ResponseMessageUtil) responseEntity.getBody();
		Exception ex = new Exception();
		when(util.errorResponse(ex, "Error ")).thenReturn(responseEntity);

		// postive case
		assertThat(responseEntity.getStatusCodeValue()).isEqualTo(200);
		assertThat(responseEntity.hasBody()).isEqualTo(true);
		assertThat(response.get("message")).isEqualTo("Success");
		assertThat(response.get("user")).isEqualTo(User.class);

		// negative case
		assertThat(response.get("statusCode : ")).isNotEqualTo(500);
		assertThat(responseEntity.hasBody()).isNotEqualTo(false);
		assertThat(response.get("Message : ")).isNotEqualTo("Server Error");
		assertThat(response.get("Exception message :")).isNotEqualTo(Exception.class);
		assertThat(response.get("user")).isNotEqualTo(null);

	}

	
}
