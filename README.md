# RFID-Based Student Attendance System

## RFID-Based Student Attendance System Using ESP32, MFRC522, Node.js, and Web Dashboard

---

## Abstract

The RFID-Based Student Attendance System is an Internet of Things (IoT) solution that automates classroom attendance using RFID technology and wireless communication. Traditional attendance methods consume valuable lecture time, are prone to human error, and allow proxy attendance. This project eliminates these issues by integrating an ESP32 microcontroller, an MFRC522 RFID scanner, and a Node.js backend server with a live web dashboard.

When a student scans an RFID card, the ESP32 reads the card's Unique Identifier (UID) and transmits it over Wi-Fi to the backend server through an HTTP POST request. The server validates the UID against the registered student database, records attendance with date and time, and updates the dashboard instantly. The system also provides immediate hardware feedback using LEDs, a buzzer, and a 20x4 LCD display.

This project demonstrates the practical implementation of IoT, Embedded Systems, Full-Stack Web Development, and Network Communication in educational environments.

---

# Features

* Automated attendance marking
* Contactless RFID card scanning
* Real-time attendance updates
* Wi-Fi based communication
* HTTP REST API integration
* Instant UID validation
* Live attendance dashboard
* Timestamp logging
* LCD status display
* Green LED for successful attendance
* Red LED for invalid cards
* Buzzer confirmation
* Student database management
* Low-cost hardware implementation
* Easy deployment in classrooms

---

# Project Objectives

The primary objectives of this project are:

* Eliminate manual attendance processes
* Prevent proxy attendance
* Reduce attendance recording time
* Improve attendance accuracy
* Store attendance digitally
* Provide real-time attendance monitoring
* Build a scalable IoT-based attendance solution
* Demonstrate embedded system and web integration

---

# Technology Stack

## Embedded Systems

* ESP32 Wroom DEVKIT V1
* Arduino Framework
* C++

## Communication

* Wi-Fi
* HTTP POST Requests
* REST API

## Backend

* Node.js
* Express.js

## Frontend

* HTML5
* CSS3
* JavaScript

## Libraries

* WiFi.h
* HTTPClient.h
* SPI.h
* MFRC522
* LiquidCrystal_I2C

---

# Hardware Components

| Component              | Purpose                                 |
| ---------------------- | --------------------------------------- |
| ESP32 Wroom DEVKIT V1  | Main controller with Wi-Fi connectivity |
| MFRC522 RFID Module    | Reads RFID cards                        |
| RFID Cards/Tags        | Student identification                  |
| 20x4 LCD Display (I2C) | Displays attendance status              |
| Green LED              | Successful validation indicator         |
| Red LED                | Invalid card indicator                  |
| Active Piezo Buzzer    | Audio confirmation                      |
| Breadboard             | Circuit assembly                        |
| Jumper Wires           | Electrical connections                  |
| USB Cable              | Power and programming                   |

---

# Software Components

* Arduino IDE
* Visual Studio Code
* Node.js
* Express.js
* Git
* GitHub
* Web Browser

---

# System Architecture

```
RFID Card
      │
      ▼
MFRC522 RFID Reader
      │
      ▼
ESP32 Wroom DEVKIT V1
      │
      │  Wi-Fi
      ▼
HTTP POST Request
      │
      ▼
Node.js Express Server
      │
      ▼
Student Database Validation
      │
      ▼
Attendance Stored
      │
      ▼
Live Web Dashboard Updated
```

---

# Working Principle

The system begins by powering the ESP32 microcontroller. During initialization, the ESP32 establishes a secure connection to the configured Wi-Fi network. Once connected, it initializes the RFID reader, LCD display, LEDs, and buzzer before entering an idle state.

The RFID reader continuously monitors for RFID cards placed near it. When a student scans their RFID card, the MFRC522 module reads the card's Unique Identifier (UID). The ESP32 converts this UID into a string format and prepares an HTTP POST request containing the UID.

The request is transmitted over the local Wi-Fi network to the Node.js backend server. Upon receiving the request, the server searches the registered student database for a matching UID.

If the UID exists in the database, the server records the student's attendance along with the current date and time. The attendance information is stored and simultaneously reflected on the live web dashboard.

The ESP32 receives the server response and provides immediate feedback:

For successful validation:

* Green LED turns ON
* Buzzer beeps
* LCD displays "Present"

For failed validation:

* Red LED turns ON
* LCD displays "Absent"

After displaying the result for a few seconds, the system resets and waits for the next RFID card.

---

# Workflow

### Step 1: Device Initialization

* ESP32 powers on.
* RFID reader initializes.
* LCD initializes.
* LEDs initialize.
* Buzzer initializes.

---

### Step 2: Wi-Fi Connection

* ESP32 connects to the configured Wi-Fi network.
* Network connection is verified.

---

### Step 3: Waiting State

* LCD displays the scan prompt.
* RFID reader continuously waits for a student card.

---

### Step 4: RFID Card Detection

* Student places RFID card near the scanner.
* MFRC522 reads the card.
* UID is extracted.

---

### Step 5: Data Transmission

* ESP32 creates an HTTP POST request.
* UID is sent to the backend server.

Example Payload

```json
{
  "uid": "A4F23D19"
}
```

---

### Step 6: Server Validation

The backend server:

* Receives UID
* Searches student database
* Validates student identity
* Records attendance
* Generates response

---

### Step 7: Success Response

If UID is valid:

* Attendance recorded
* Timestamp stored
* Dashboard updated
* Green LED ON
* Buzzer beeps
* LCD displays:

```
Attendance Marked

Present
```

---

### Step 8: Failure Response

If UID is invalid:

* Attendance rejected
* No database entry created
* Red LED ON
* LCD displays:

```
Card Not Found

Absent
```

---

### Step 9: Reset

The ESP32 clears the LCD, turns off LEDs, and returns to waiting mode for the next RFID card.

---

# HTTP API

## Endpoint

```
POST /mark-attendance
```

---

### Request

```json
{
  "uid": "A4F23D19"
}
```

---

### Success Response

```json
{
    "status":"success",
    "message":"Attendance Marked"
}
```

---

### Failure Response

```json
{
    "status":"failed",
    "message":"Invalid Card"
}
```

---

# Folder Structure

```
RFID-Attendance-System/

│
├── Arduino/
│   ├── RFID_Attendance.ino
│
├── Backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│
├── Frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── Images/
│
├── README.md
│
└── LICENSE
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/username/RFID-Attendance-System.git
```

---

## Backend Setup

```bash
cd Backend
```

Install dependencies

```bash
npm install
```

Start server

```bash
node server.js
```

---

## ESP32 Setup

1. Open Arduino IDE.
2. Install ESP32 board package.
3. Install required libraries.
4. Configure Wi-Fi credentials.
5. Upload the code.

---

# Required Libraries

```text
WiFi.h

HTTPClient.h

SPI.h

MFRC522.h

LiquidCrystal_I2C.h
```

---

# Future Improvements

* Fingerprint authentication
* Face recognition integration
* Cloud database
* Firebase support
* Mobile application
* SMS notifications
* Email notifications
* Attendance analytics
* Student portal
* Teacher login
* Admin dashboard
* QR code attendance
* NFC support
* Multiple classroom support
* Cloud deployment
* AI-based attendance analytics

---

# Applications

* Schools
* Colleges
* Universities
* Coaching Institutes
* Corporate Offices
* Laboratories
* Libraries
* Research Centers
* Industrial Training Centers

---

# Advantages

* Fast attendance marking
* Eliminates paperwork
* Prevents proxy attendance
* Real-time monitoring
* Accurate attendance records
* Wireless communication
* Low maintenance
* Easy installation
* Cost-effective
* Scalable architecture

---

# Limitations

* Requires Wi-Fi connectivity
* RFID cards can be misplaced
* Initial hardware setup required
* Local server dependency unless deployed

---

# Learning Outcomes

This project demonstrates practical knowledge of:

* Embedded Systems
* Internet of Things (IoT)
* RFID Technology
* REST API Development
* HTTP Communication
* Node.js Backend Development
* Frontend Web Development
* Hardware and Software Integration
* Sensor Communication
* Network Programming
* Real-Time Data Processing
* Full-Stack Development

---

# Author

Charan Sai

B.Tech Internet of Things (IoT)

Full Stack Web Developer

Embedded Systems Enthusiast

Machine Learning Enthusiast

Business Intelligence and Data Analytics Research Contributor

---

# License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project for educational and research purposes.
