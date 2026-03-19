package com.example.Assignment.controller;
import com.example.Assignment.model.Profile;
import com.example.Assignment.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public Profile getProfile() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return profileService.getProfile(email);
    }

    @PutMapping
    public Profile updateProfile(@RequestBody Profile profile) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return profileService.updateProfile(email, profile);
    }
}