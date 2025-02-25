const pool = require('../../db');
const queries = require('./queries');

const getInventory = (req, res) => {
    pool.query(queries.getInventory, (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({ error: "Failed to fetch drivers" });
        }
        res.status(200).json(results.rows);
    });
};

const getDriverById = (req, res) => {
    const driverId = parseInt(req.params.id);
    if (isNaN(driverId)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    pool.query(queries.getDriverById, [driverId], (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({ error: "Driver Not Found" });
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ error: "No driver with that ID" });
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getInventory,
    getDriverById
};
