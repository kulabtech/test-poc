package com.registration.registration.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name= "User")
public class AllStateUser {

    @Id
    String firstName;

    String lastName;
    
    String emailId;
    String password;
    String cpassword;
    String role;
    
    AllStateUser(){}
    
    

	public AllStateUser(String firstName, String lastName, String role, String emailId, String password, String cpassword) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		
		this.emailId = emailId;
		this.password = password;
		this.cpassword = cpassword;
		this.role = role;
	}



	public String getCpassword() {
		return cpassword;
	}



	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
