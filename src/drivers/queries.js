const getInventory = "SELECT * FROM drivers";               // ✅ Matches your table
const getDriverById = "SELECT * FROM drivers WHERE id = $1"; // ✅ Get by ID

module.exports = {
    getInventory,
    getDriverById
};
