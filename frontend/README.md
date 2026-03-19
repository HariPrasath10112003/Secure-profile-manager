#  User Authentication & Profile Management System

##  Overview

This project is a full-stack web application that implements user authentication and profile management using React, Spring Boot, and PostgreSQL.

---

##  Features

* User Registration
* User Login with JWT Authentication
* Secure Token-based Authorization
* Profile View
* Profile Update (Name, Email, Age, DOB, Contact)
* Data stored in PostgreSQL

---

##  Technologies Used

* Frontend: React (Vite)
* Backend: Spring Boot
* Database: PostgreSQL
* Authentication: JWT (JSON Web Token)

---

##  Application Flow

1. User registers with name, email, and password
2. Data is stored in PostgreSQL
3. User logs in with credentials
4. Backend validates and generates JWT token
5. Token is stored in browser localStorage
6. Frontend sends token in Authorization header
7. Backend verifies token using JWT filter
8. User details are fetched and displayed
9. User can update profile details
10. Updated data is saved in database

---

##  Security

* JWT-based authentication
* Protected API endpoints
* Token validation using filter

---

##  How to Run

### Backend

1. Run Spring Boot application
2. Connect to PostgreSQL database

### Frontend

1. Install dependencies

   ```bash
   npm install
   ```
2. Run application

   ```bash
   npm run dev
   ```
   
---


## Author

Hari Prasath
