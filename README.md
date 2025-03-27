🏎️ Formula1 Tracker - Frontend

📌 Project Overview

The Formula1 Tracker Frontend is a web application built with Node.js and Express to interact with Formula1-related data. This frontend communicates with a PostgreSQL database via the backend API hosted on Render.

📋 Table of Contents
Installation & Setup

Features

Database Connection

API Integration

Deployment

Screenshots

Contributing

License




🛠️ Installation & Setup

Prerequisites

Ensure you have the following installed on your system:

Node.js (v18+ recommended)

PostgreSQL

Clone the Repository
```bash
git clone https://github.com/yourusername/Formula1-Tracker--frontend.git
cd Formula1-Tracker--frontend
```
Install Dependencies
```bash
npm install
```
Environment Setup

Ensure your db.js file is configured correctly:
```bash
const { Pool } = require("pg");

const pool = new Pool({
  user: "api_advanced_programming_user",
  host: "dpg-cvccvpij1k8c7c10ou0-a.ohio-postgres.render.com",
  database: "Formula 1 project database",
  password: "YOUR_PASSWORD_HERE", // Replace with a secure password
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Required for Render
});

pool.on("connect", () => {
  console.log("✅ Connected to Render PostgreSQL Database");
});

module.exports = pool;
```
Start the Server
```bash
npm start
```
The server should be running at: http://localhost:5009

🌟 Features

CRUD operations for Formula1 data

PostgreSQL database integration

Secure connection with SSL for external databases

RESTful API for seamless communication

🗂️ Database Connection

Ensure your PostgreSQL instance is properly configured, and the credentials match the db.js file.
```bash
Database Schema

CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    headquarters VARCHAR(255) NOT NULL
);

CREATE TABLE drivers (
    driver_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    team_id INTEGER REFERENCES teams(team_id),
    nationality VARCHAR(100) NOT NULL
);

CREATE TABLE races (
    race_id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE results (
    result_id SERIAL PRIMARY KEY,
    driver_id INTEGER REFERENCES drivers(driver_id),
    race_id INTEGER REFERENCES races(race_id),
    position INTEGER
);
```
🔗 API Integration

The frontend interacts with the backend API endpoints to perform CRUD operations. Ensure the backend server is running and accessible.

🚀 Deployment

To deploy the frontend, ensure the environment variables are set correctly and use platforms like Render, Vercel, or Heroku.

📸 Screenshots

Unfortunately, the API URL was not working at the moment, so screenshots from the website could not be added as the data was not showing up.

🤝 Contributing

Fork the repository.

Create your feature branch: git checkout -b feature/your-feature.

Commit your changes: git commit -m 'Add your feature'.

Push to the branch: git push origin feature/your-feature.

Open a Pull Request.

📜 License

This project is licensed under the MIT License.
