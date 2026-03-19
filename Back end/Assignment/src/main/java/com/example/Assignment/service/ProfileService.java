package com.example.Assignment.service;

import com.example.Assignment.model.Profile;
import com.example.Assignment.model.User;
import com.example.Assignment.repository.ProfileRepository;
import com.example.Assignment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepo;

    @Autowired
    private UserRepository userRepo;

    public Profile getProfile(String email) {
        User user = userRepo.findByEmail(email).get();
        return profileRepo.findByUser(user).orElse(new Profile());
    }

    public Profile updateProfile(String email, Profile profileData) {
        User user = userRepo.findByEmail(email).get();

        Profile profile = profileRepo.findByUser(user).orElse(new Profile());

        profile.setUser(user);
        profile.setAge(profileData.getAge());
        profile.setDob(profileData.getDob());
        profile.setContact(profileData.getContact());

        return profileRepo.save(profile);
    }
}
