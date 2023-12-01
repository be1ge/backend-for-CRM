const Router = require('express');
const router = new Router();
const BetController = require('../controllers/bet.controller');

router.post('/bet', BetController.createBet);
router.get('/bet', BetController.getAllBets);
router.get('/bet/:id', BetController.getOneBet);
router.put('/bet', BetController.updateBet);
router.delete('/bet/:id', BetController.deleteBet);

module.exports = router;
