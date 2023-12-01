const db = require('../db');

class ClientController {
    async createClient(req, res) {
        const {title, content} = req.body;
        const newClient = await db.query(`INSERT INTO client (title, content) values ($1, $2) RETURNING * `, [title, content]);
        res.json(newClient.rows[0]);
    }
    async getAllClients(req, res) {
        const getAllClients = await db.query(`SELECT * FROM client ORDER BY id ASC`);
        res.json(getAllClients.rows)
    }
    async getOneClient(req, res) {
        const id = req.params.id;
        const getOneClient = await db.query(`SELECT * FROM client WHERE id = $1`, [id]);
        res.json(getOneClient.rows[0]);
    }
    async updateClient(req, res) {
        const {id, title, content} = req.body;
        const updateClient = await db.query(`UPDATE client SET title = $1, content = $2 WHERE id = $3 RETURNING * `, [title, content, id])
        res.json(updateClient.rows[0])
    }
    async deleteClient(req, res) {
        const id = req.params.id;
        const deleteClient = await db.query(`DELETE FROM client WHERE id = $1`, [id]);
        res.json('Клиент успешно удален')
    }
}

module.exports = new ClientController();
