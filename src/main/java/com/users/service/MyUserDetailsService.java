package com.users.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.users.model.User;
import com.users.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	private static final Logger logger = LoggerFactory.getLogger(MyUserDetailsService.class);

	@Override
	public UserDetails loadUserByUsername(String emailID) throws UsernameNotFoundException {
		logger.info("fetching emailID from  :->" + emailID);

		User user = userRepository.findByemailId(emailID)
				.orElseThrow(() -> new UsernameNotFoundException("No user found " + emailID));
		// return new
		// org.springframework.security.core.userdetails.User(user.getFirstName(),
		// user.getPassword(), true,
		// true, true, true, getAuthorities("ROLE_USER"));

		return new org.springframework.security.core.userdetails.User(user.getEmailId(), user.getPassword(),
				getGrantedAuthority(user.getRole()));
	}

//	private Collection<? extends GrantedAuthority> getAuthorities(String role_user) {
//		return Collections.singletonList(new SimpleGrantedAuthority(role_user));
//	}

	private Collection<GrantedAuthority> getGrantedAuthority(String role) {
		Collection<GrantedAuthority> authorities = new ArrayList<>();
		if (role.equalsIgnoreCase("admin")) {
			authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		} else {
			authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
		}
		return authorities;
	}

}
