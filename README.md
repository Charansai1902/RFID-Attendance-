# RFID-Based Student Attendance System

An IoT-enabled Smart Attendance Management System that automates classroom attendance using RFID technology, ESP32, and a web-based dashboard. The system eliminates manual attendance, reduces human error, prevents proxy attendance, and provides real-time attendance monitoring through wireless communication.

---

# Table of Contents

* Overview
* Features
* System Architecture
* Hardware Components
* Software Stack
* Sensor Integration
* Workflow
* Communication Protocols
* Folder Structure
* Installation
* Future Scope
* Author

---

# Overview

The RFID-Based Student Attendance System is designed to simplify and automate attendance management using Internet of Things (IoT) technology.

The project consists of an ESP32 Wroom DEVKIT V1 connected to an MFRC522 RFID Reader Module. Every student is assigned a unique RFID card containing a Unique Identifier (UID). When a student scans the RFID card, the ESP32 reads the UID and sends it to a Node.js backend server over Wi-Fi using an HTTP POST request.

The backend validates the UID against the student database, records attendance with the current date and time, and instantly updates the web dashboard. The ESP32 also provides immediate feedback using LEDs, an LCD display, and a buzzer.

---

# Features

* RFID-based attendance system
* Automatic attendance marking
* Real-time attendance monitoring
* Wi-Fi communication using ESP32
* HTTP REST API integration
* Live web dashboard
* Student search functionality
* Attendance percentage calculation
* LCD status display
* Green LED success indication
* Red LED invalid card indication
* Buzzer notification
* Timestamp recording
* Fast and reliable attendance system

---

# System Architecture

```text
Student RFID Card
        │
        ▼
MFRC522 RFID Reader
        │
      SPI
        │
        ▼
ESP32 Wroom DEVKIT V1
        │
      Wi-Fi
        │
HTTP POST Request
        │
        ▼
Node.js Express Server
        │
Database Validation
        │
Attendance Recorded
        │
        ▼
Live Web Dashboard
```

---

# Hardware Components

| Component              | Description                                  |
| ---------------------- | -------------------------------------------- |
| ESP32 Wroom DEVKIT V1  | Main IoT microcontroller with built-in Wi-Fi |
| MFRC522 RFID Reader    | Reads RFID cards and extracts UID            |
| RFID Cards             | Student identification cards                 |
| 20x4 LCD Display (I2C) | Displays attendance status                   |
| Green LED              | Indicates successful attendance              |
| Red LED                | Indicates invalid card                       |
| Active Piezo Buzzer    | Audio feedback after scanning                |
| Breadboard             | Circuit prototyping                          |
| Jumper Wires           | Hardware connections                         |
| USB Cable              | Power and programming                        |

---

# Software Stack

## Embedded System

* Arduino IDE
* C++
* ESP32 Board Package

## Libraries

* WiFi.h
* HTTPClient.h
* SPI.h
* MFRC522.h
* LiquidCrystal_I2C.h
* Wire.h

## Backend

* Node.js
* Express.js
* REST API

## Frontend

* HTML5
* CSS3
* JavaScript

---

# Sensor Integration

## Primary Sensor

### MFRC522 RFID Reader Module

The MFRC522 RFID Reader is the primary sensing component of this project. It detects RFID cards operating at 13.56 MHz and reads the Unique Identifier (UID) stored inside each card.

Specifications

* Operating Frequency: 13.56 MHz
* Communication Interface: SPI
* Operating Voltage: 3.3V
* Reading Distance: 2–5 cm
* Card Support: MIFARE and ISO/IEC 14443 Type A

Working

1. Student places RFID card near the reader.
2. MFRC522 detects the RFID card.
3. The UID is extracted.
4. UID is sent to ESP32.
5. ESP32 sends the UID to the server over Wi-Fi.

---

# Communication Technologies

* RFID
* SPI Communication
* Wi-Fi
* HTTP POST
* REST API
* TCP/IP
* JSON

---

# Workflow

### Step 1

ESP32 powers on and initializes the RFID reader, LCD, LEDs, and buzzer.

### Step 2

ESP32 connects to the configured Wi-Fi network.

### Step 3

System waits for an RFID card.

### Step 4

Student scans the RFID card.

### Step 5

MFRC522 reads the UID.

### Step 6

ESP32 sends the UID to the backend server using an HTTP POST request.

### Step 7

The backend validates the UID against the student database.

### Step 8

If the UID is valid:

* Attendance is recorded.
* Green LED turns ON.
* Buzzer beeps.
* LCD displays "Present".
* Dashboard updates instantly.

### Step 9

If the UID is invalid:

* Attendance is rejected.
* Red LED turns ON.
* LCD displays "Absent".

### Step 10

The system resets and waits for the next student.

---

# Folder Structure

```text
RFID-Attendance-System/

│── Arduino/
│     RFID_Attendance.ino

│── Backend/
│     server.js

│── Frontend/
│     index.html
│     style.css
│     script.js

│── Images/

│── README.md

│── LICENSE
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/RFID-Attendance-System.git
```

## Backend

```bash
cd Backend
npm install
node server.js
```

## ESP32

1. Install ESP32 Board Package.
2. Install all required libraries.
3. Configure Wi-Fi credentials.
4. Upload the Arduino sketch.

---

# Future Scope

* Face Recognition Attendance
* Fingerprint Authentication
* Mobile Application
* Firebase Integration
* Cloud Database
* Email Notifications
* SMS Alerts
* QR Code Attendance
* Multi-Classroom Support
* AI-based Attendance Analytics

---

# Learning Outcomes

This project demonstrates knowledge in:

* Internet of Things (IoT)
* Embedded Systems
* RFID Technology
* ESP32 Programming
* Wireless Communication
* REST API Development
* Full Stack Web Development
* Node.js Backend Development
* Real-Time Dashboard Development
* Hardware and Software Integration

---

# Author

**Charan Sai**

B.Tech – Internet of Things (IoT)

Full Stack Web Developer

Machine Learning Enthusiast

Business Intelligence and Data Analytics Research Contributor

---

# License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project for educational and research purposes.
