const Router = require('express');
const router = new Router();
const InstructionController = require('../controllers/instruction.controller');

router.post('/instruction', InstructionController.createInstruction);
router.get('/instruction', InstructionController.getAllInstructions);
router.get('/instruction/:id', InstructionController.getOneInstruction);
router.put('/instruction', InstructionController.updateInstruction);
router.delete('/instruction/:id', InstructionController.deleteInstruction);

module.exports = router;
