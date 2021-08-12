package com.users.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.users.filter.JwtRequestFilter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		System.out.print("Auth req");
		httpSecurity.cors().and().csrf().disable().authorizeRequests()
		.antMatchers("/login").permitAll()
		//.antMatchers("/fetchAllUsers").permitAll()
		.antMatchers("/signUp").permitAll()
		.anyRequest().authenticated();
		httpSecurity.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
	}

	@Bean
	public JwtRequestFilter jwtAuthenticationFilter() {// constructor dependency injection.
		return new JwtRequestFilter();
	}

	@Bean(BeanIds.AUTHENTICATION_MANAGER)
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

//	    @Autowired
//	    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//	        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//	    }
}
