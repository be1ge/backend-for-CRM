const Router = require('express');
const router = new Router();
const ClientController = require('../controllers/client.controller');

router.post('/client', ClientController.createClient);
router.get('/client', ClientController.getAllClients);
router.get('/client/:id', ClientController.getOneClient);
router.put('/client', ClientController.updateClient);
router.delete('/client/:id', ClientController.deleteClient);

module.exports = router;
