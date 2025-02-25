const { Pool } = require("pg");

const pool = new Pool({
  user: "akijhawar", 
  host: "dpg-cugl7shu0jms73fnis1g-a.ohio-postgres.render.com", 
  database: "programming_9fv3", 
  password: "ObkjexDsu8B60lAC6ZIJtw47hGx4PN0y", // ✅ Corrected password
  port: 5432, 
  ssl: { rejectUnauthorized: false } // ✅ Needed for Render connections
});

pool.on("connect", () => {
  console.log("✅ Connected to Render PostgreSQL Database");
});

module.exports = pool;
