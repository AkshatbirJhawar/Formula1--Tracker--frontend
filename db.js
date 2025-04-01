const { Pool } = require("pg");

const pool = new Pool({
  user: "api_advanced_programming_user", 
  host: "dpg-cvccvpij1k6c73c10ou0-a", 
  database: "api_advanced_programming", 
  password: "vMWORrD5IdBjjLVS7SX2WDbO2Ue3n3RB",
  port: 5432, 
  ssl: { rejectUnauthorized: false } // ✅ Needed for Render connections
});

pool.on("connect", () => {
  console.log("✅ Connected to Render PostgreSQL Database");
});

module.exports = pool;
