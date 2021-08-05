package com.registration.registration.repository;

import com.registration.registration.entity.AllStateUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<AllStateUser , String> {


    public AllStateUser findByEmailId(String email);
}
