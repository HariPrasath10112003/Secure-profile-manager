package com.example.Assignment.controller;

import com.example.Assignment.dto.LoginRequest;
import com.example.Assignment.dto.RegisterRequest;
import com.example.Assignment.model.User;
import com.example.Assignment.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest req) {

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());

        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest req) {

        String token = authService.login(req.getEmail(), req.getPassword());

        return ResponseEntity.ok(token);
    }
}