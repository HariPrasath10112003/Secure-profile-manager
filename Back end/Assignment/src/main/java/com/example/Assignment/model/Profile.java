package com.example.Assignment.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int age;
    private String dob;
    private String contact;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
