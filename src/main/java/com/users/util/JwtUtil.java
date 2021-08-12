package com.users.util;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.annotation.PostConstruct;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtUtil {
//
	private String SECRET_KEY = "secret";

//
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}

//
	private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}

//
	private Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
	}

//
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}

//
//	public String generateToken(UserDetails userDetails) {
//		Map<String, Object> claims = new HashMap<>();
//		return createToken(claims, userDetails.getUsername());
//	}
//
//	private String createToken(Map<String, Object> claims, String subject) {
//		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
//				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
//				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//	}
//
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}

//	
	private Key key;

	@PostConstruct
	public void init() {
		key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
	}

	private String createToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
	}

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}
//	public String generateToken(UserDetails userDetails) {
//		User principal = (User) userDetails.getPrincipal();
//	//	Keys key;
//		return Jwts.builder().setSubject(principal.getUsername()).signWith(key).compact();
//				
//	}

	public boolean validateToken(String jwt) {
		Jwts.parser().setSigningKey(key).parseClaimsJws(jwt);
		return true;
	}

	public String getUsernameFromJWT(String jwt1) {
		Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(jwt1).getBody();
		return claims.getSubject();
	}
}
