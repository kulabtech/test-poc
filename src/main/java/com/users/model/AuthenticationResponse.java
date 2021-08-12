package com.users.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class AuthenticationResponse {

	private final String jwt;
	private final Collection<? extends GrantedAuthority> authority;

	public AuthenticationResponse(String jwt, Collection<? extends GrantedAuthority> authority) {

		this.jwt = jwt;
		this.authority = authority;
	}

	public String getJwt() {
		return jwt;
	}

	public Collection<? extends GrantedAuthority> getAuthority() {
		return authority;
	}
}
