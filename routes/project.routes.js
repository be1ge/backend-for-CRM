const Router = require('express');
const router = new Router();
const ProjectController = require('../controllers/project.controller');

router.post('/project', ProjectController.createProject);
router.get('/project', ProjectController.getAllProjects);
router.get('/project/:id', ProjectController.getOneProject);
router.put('/project', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);

module.exports = router;
