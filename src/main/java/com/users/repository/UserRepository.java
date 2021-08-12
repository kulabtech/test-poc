package com.users.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.users.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByemailId(String emailId);

	Optional<User> findByfirstName(String firstName);
}
