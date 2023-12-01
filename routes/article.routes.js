const Router = require('express');
const router = new Router();
const ArticleController = require('../controllers/article.controller');

router.post('/article', ArticleController.createArticle);
router.get('/article', ArticleController.getAllArticles);
router.get('/article/:id', ArticleController.getOneArticle);
router.put('/article', ArticleController.updateArticle);
router.delete('/article/:id', ArticleController.deleteArticle);

module.exports = router;
