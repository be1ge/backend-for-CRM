const db = require('../db');

class BetController {
    async createBet(req, res) {
        const {bet, normal, comment} = req.body;
        const newBet = await db.query(`INSERT INTO bet (bet, normal, comment) values ($1, $2, $3) RETURNING * `, [bet, normal, comment]);
        res.json(newBet.rows[0]);
    }
    async getAllBets(req, res) {
        const getAllBets = await db.query(`SELECT * FROM bet ORDER BY id ASC`);
        res.json(getAllBets.rows)
    }
    async getOneBet(req, res) {
        const id = req.params.id;
        const getOneBet = await db.query(`SELECT * FROM bet WHERE id = $1`, [id]);
        res.json(getOneBet.rows[0]);
    }
    async updateBet(req, res) {
        const {id, bet, normal, comment} = req.body;
        const updateBet = await db.query(`UPDATE bet SET normal = $1, comment = $2, bet = $3 WHERE id = $4 RETURNING * `, [normal, comment, bet, id])
        res.json(updateBet.rows[0])
    }
    async deleteBet(req, res) {
        const id = req.params.id;
        const deleteBet = await db.query(`DELETE FROM bet WHERE id = $1`, [id]);
        res.json('Ставка успешно удалена')
    }
}

module.exports = new BetController();
