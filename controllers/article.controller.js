const db = require('../db');

class ArticleController {
    async createArticle(req, res) {
        const {title, comment} = req.body;
        const newArticle = await db.query(`INSERT INTO article (title, comment) values ($1, $2) RETURNING * `, [title, comment]);
        res.json(newArticle.rows[0]);
    }
    async getAllArticles(req, res) {
        const getAllArticles = await db.query(`SELECT * FROM article ORDER BY id ASC`);
        res.json(getAllArticles.rows)
    }
    async getOneArticle(req, res) {
        const id = req.params.id;
        const getOneArticle = await db.query(`SELECT * FROM article WHERE id = $1`, [id]);
        res.json(getOneArticle.rows[0]);
    }
    async updateArticle(req, res) {
        const {id, title, comment} = req.body;
        const updateArticle = await db.query(`UPDATE article SET title = $1, comment = $2 WHERE id = $3 RETURNING * `, [title, comment, id])
        res.json(updateArticle.rows[0])
    }
    async deleteArticle(req, res) {
        const id = req.params.id;
        const deleteArticle = await db.query(`DELETE FROM article WHERE id = $1`, [id]);
        res.json('Артикул успешно удален')
    }
}

module.exports = new ArticleController();
