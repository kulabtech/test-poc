package com.registration.registration.service;

import com.registration.registration.entity.AllStateUser;
import com.registration.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService{

    @Autowired
    private UserRepository repo;

    public AllStateUser saveEmployee(AllStateUser user) {

            return repo.save(user);
    }

    public AllStateUser fetchUserByEmailId(String email) {
        return repo.findByEmailId(email);
    }

    public List<AllStateUser> getAllUser() {
        return repo.findAll();
    }
}


