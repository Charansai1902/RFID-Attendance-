# RFID-Based Student Attendance System

An innovative IoT and Web Development solution designed to resolve time-management inefficiencies in traditional classroom attendance taking. By automating the tracking process, this system minimizes human error, prevents proxy attendance, and surfaces records instantly on a central monitoring console.

## 🚀 Overview
This project architecture utilizes an **ESP32 Wroom DEVKIT V1** paired with an **MFRC522 RFID Scanner** to automatically capture and process student presence. When an RFID tag or card is swiped, the ESP32 decodes its hardware Unique Identifier (UID) and transmits it over a local Wi-Fi connection via an HTTP POST request to a backend server. The server cross-references the UID, logs the timestamp, updates the student data payload, and immediately reflects the changes onto a live web-based dashboard.

---

## 🛠️ System Architecture & Components

### 1. Hardware Components
- **ESP32 Wroom DEVKIT V1** – Core processing micro-controller with an integrated Wi-Fi stack.
- **MFRC522 RFID Scanner Module** – Radio-frequency receiver to read contactless student smart cards.
- **20x4 LCD Display (with I2C Module)** – Provides immediate, localized visual feedback to the user.
- **Status LEDs (Green & Red)** – Indicators for successful validation or unrecognized card errors.
- **Active Piezo Buzzer** – Generates a clear acoustic confirmation tone upon scanning.
- **Solderless Breadboard & Jumper Wires** – High-grade interconnectivity paths for component wiring.

### 2. Software Stack & Technologies
- **IoT/Embedded Hardware:** C++ (Arduino Framework), `WiFi.h`, `HTTPClient.h`, `SPI.h`, `MFRC522` driver library, and `LiquidCrystal_I2C`.
- **Backend Architecture:** Node.js Express Server (Intercepts incoming hardware payloads at `/mark-attendance` and serves database payloads securely).
- **Frontend Dashboard:** Valid HTML5 structural elements, custom CSS3 animation styles, and Object-Oriented Vanilla JavaScript (Zero external third-party dependencies).

---

## ⚙️ How It Works (Workflow)
