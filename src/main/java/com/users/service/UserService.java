package com.users.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.users.exception.UsernameNotFoundException;
import com.users.model.AuthenticationResponse;
import com.users.model.LoginDTO;
import com.users.model.RegisterDTO;
import com.users.model.User;
import com.users.repository.UserRepository;
import com.users.util.JwtUtil;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MyUserDetailsService userDetailsService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtUtil jwtUtilService;

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	private static final Logger logger = LoggerFactory.getLogger(UserService.class);

	public void signUp(RegisterDTO registerDTO) throws Exception {

		User user = new User();
		user.setFirstName(registerDTO.getFirstName());
		user.setLastName(registerDTO.getLastName());
		user.setEmailId(registerDTO.getEmailId());
		user.setPassword(encodePassword(registerDTO.getPassword()));
		user.setRole(registerDTO.getRole());

		logger.info("Saving User DTO to DB :->" + user);
		userRepository.save(user); 
	}

	private String encodePassword(String password) {
		return passwordEncoder.encode(password);
	}

	public AuthenticationResponse login(LoginDTO loginDTO) throws Exception {

		try {

			Authentication authenticate = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginDTO.getEmailID(), loginDTO.getPassword()));
		} catch (BadCredentialsException e) {
			logger.error("Invalid Email-ID/password for User :-> " + loginDTO.getEmailID());
			throw new UsernameNotFoundException("Invalid email ID or password");
		}

		UserDetails userDetails = userDetailsService.loadUserByUsername(loginDTO.getEmailID());
		String authenticationToken = jwtUtilService.generateToken(userDetails);

		return new AuthenticationResponse(authenticationToken,userDetails.getAuthorities());
	}

	public Optional<org.springframework.security.core.userdetails.User> getCurrentUser() {
		org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder
				.getContext().getAuthentication().getPrincipal();
		System.out.println(principal);
		return Optional.of(principal);
	}

	public List<User> fetchAllUsers() {
		return userRepository.findAll();
	}
}
