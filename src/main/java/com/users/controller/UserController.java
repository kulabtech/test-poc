package com.users.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.users.model.AuthenticationResponse;
import com.users.model.LoginDTO;
import com.users.model.RegisterDTO;
import com.users.model.User;
import com.users.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/signUp")
	@CrossOrigin
	public ResponseEntity signUp(@Valid @RequestBody RegisterDTO registerDTO) throws Exception {
		logger.info("Received Register DTO {} :->" + registerDTO);
		userService.signUp(registerDTO);
		return new ResponseEntity(HttpStatus.OK);
	}

	@PostMapping("/login")
	@CrossOrigin
	public AuthenticationResponse login(@RequestBody LoginDTO loginDTO) throws Exception {
		logger.info("Logging in with email ID :-> " + loginDTO.getEmailID());
		return userService.login(loginDTO);
	}

	@GetMapping("/fetchAllUsers")
	@CrossOrigin
	public ResponseEntity<List<User>> fetchAllUsers() {
		logger.info("Fetching All users");
		return new ResponseEntity<>(userService.fetchAllUsers(), HttpStatus.OK);
	}
	
//	@GetMapping("/fetchUserById/{id}")
//	public ResponseEntity<List<User>> fetchUserById(@PathVariable @RequestBody Long id) {
//		logger.info("Fetching  user by ID");
//		User user = userService.fetchUserById(id);
//		return new ResponseEntity(user HttpStatus.OK);
//	}

}
