package com.example.Assignment.service;

import com.example.Assignment.model.User;
import com.example.Assignment.repository.UserRepository;
import com.example.Assignment.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    public String register(User user) {
        userRepo.save(user);
        return "Registered Successfully";
    }

    public String login(String email, String password) {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(email);
    }
}
