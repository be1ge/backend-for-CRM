const Router = require('express');
const router = new Router();
const WorkerController = require('../controllers/worker.controller');

router.post('/worker', WorkerController.createWorker);
router.get('/worker', WorkerController.getAllWorkers);
router.get('/worker/:id', WorkerController.getOneWorker);
router.put('/worker', WorkerController.updateWorker);
router.delete('/worker/:id', WorkerController.deleteWorker);

module.exports = router;
