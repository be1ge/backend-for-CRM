const Router = require('express');
const router = new Router();
const postControllers = require('../controllers/post.controller');

router.post('/post', postControllers.createPost);
router.get('/post', postControllers.getPostsByUser);

module.exports = router;
