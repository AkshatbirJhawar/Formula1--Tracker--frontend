const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getInventory);       // ✅ GET all drivers
router.get('/:id', controller.getDriverById);  // ✅ GET driver by ID

module.exports = router;
