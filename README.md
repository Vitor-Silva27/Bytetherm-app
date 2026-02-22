<p align="center">
  <img src="images/logo.png" width="200" alt="ByteTherm Logo">
</p>

<h1 align="center">ByteTherm - IoT Mobile Dashboard 🌡️💧</h1>

> A React Native mobile application for real-time monitoring of temperature and humidity in critical environments.

This project was developed as part of a Technological Residency in Embedded Systems. It serves as the mobile interface for an end-to-end IoT ecosystem.

## 📖 About the Project

ByteTherm provides an interface to monitor environmental data collected by ESP8266 microcontrollers. In the physical environment, the microcontrollers use local sensors, an LCD, an LED, and a buzzer to immediately alert personnel if safe thresholds are exceeded. 

Simultaneously, the hardware publishes this data via MQTT to a backend server, which this mobile application consumes via a REST API to provide remote tracking, historical data, and status monitoring.

## 🔄 System Architecture & Flow

![IoT Architecture Flow](images/architecture-flow-diagram.png)

1. **Edge (Hardware):** ESP8266 reads temp/humidity -> Validates thresholds -> Sends data via MQTT.
2. **Backend (Node.js):** Subscribes to MQTT -> Processes and stores data -> Exposes a REST API.
3. **Client (ByteTherm):** Fetches data via REST API -> Displays interactive UI to the user.

*Note: The backend server handling the MQTT broker and REST API can be found in a separate repository here: [Backend-server](https://github.com/Vitor-Silva27/Projetos/tree/main/monitoramento-de-temperatura/server)*

## 📱 Screenshots

<div align="center">
  <img src="images/login-screenshot.jpeg" width="250" alt="Login">
  &nbsp;&nbsp;&nbsp;
  <img src="images/main-screenshot.jpeg" width="250" alt="Home">
  &nbsp;&nbsp;&nbsp;
  <img src="images/room-screenshot.jpeg" width="250" alt="Room conditions">
  &nbsp;&nbsp;&nbsp;
  <img src="images/room2-screenshot.jpeg" width="250" alt="Room conditions 2">
    &nbsp;&nbsp;&nbsp;
  <img src="images/rooms-screenshot.jpeg" width="250" alt="Rooms">
    &nbsp;&nbsp;&nbsp;
  <img src="images/create-room-screenshot.jpeg" width="250" alt="Create Room">
    &nbsp;&nbsp;&nbsp;
  <img src="images/delete-screenshot.jpeg" width="250" alt="Delete">
    &nbsp;&nbsp;&nbsp;
  <img src="images/users-screenshot.jpeg" width="250" alt="users">
    &nbsp;&nbsp;&nbsp;
  <img src="images/add-user-screenshot.jpeg" width="250" alt="add user">
    &nbsp;&nbsp;&nbsp;
  <img src="images/profile-screenshot.jpeg" width="250" alt="profile">
</div>

## 🛠️ Tech Stack

* **Framework:** React Native
* **Language:** TypeScript
* **Routing:** React Navigation
* **Data Fetching & Caching:** React Query (`@tanstack/react-query`) & Axios
* **Local Storage:** `react-native-mmkv`
* **Schema Validation:** Zod