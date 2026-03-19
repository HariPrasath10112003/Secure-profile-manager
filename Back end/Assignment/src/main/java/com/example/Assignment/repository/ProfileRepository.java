package com.example.Assignment.repository;

import com.example.Assignment.model.Profile;
import com.example.Assignment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    Optional<Profile> findByUser(User user);
}