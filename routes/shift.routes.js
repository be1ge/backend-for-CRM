const Router = require('express');
const router = new Router();
const ShiftController = require('../controllers/shift.controller');

router.post('/shift', ShiftController.createShift);
router.get('/shift', ShiftController.getAllShifts);
router.get('/shift/:id', ShiftController.getOneShift);
router.put('/shift', ShiftController.updateShift);
router.delete('/shift/:id', ShiftController.deleteShift);

module.exports = router;
