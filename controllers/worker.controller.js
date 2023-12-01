const db = require(`../db`);

class WorkerController {
    async createWorker(req, res) {
        const {
            surname,
            name,
            patron,
            bet,
            phone,
            day,
            status,
            recruitor,
            comment,
        } = req.body;
        const newWorker = await db.query(
            `INSERT INTO worker (surname, name, patron, bet, phone, day, status, recruitor, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [surname, name, patron, bet, phone, day, status, recruitor, comment]
        );
        res.json(newWorker.rows[0]);
    }

    async getAllWorkers(req, res) {
        const getAllWorkers = await db.query(
            `SELECT * FROM worker ORDER BY id ASC`
        );
        res.json(getAllWorkers.rows);
    }

    async getOneWorker(req, res) {
        const id = req.params.id;
        const getOneWorker = await db.query(
            `SELECT * FROM worker WHERE id = $1`,
            [id]
        );
        res.json(getOneWorker.rows[0]);
    }

    async updateWorker(req, res) {
        const {
            id,
            surname,
            name,
            patron,
            bet,
            phone,
            day,
            status,
            recruitor,
            comment,
        } = req.body;
        const updateWorker = await db.query(
            `UPDATE worker SET surname = $1, name = $2, patron = $3, bet = $4, phone = $5, day = $6, status = $7, recruitor = $8, comment = $9 WHERE id = $10 RETURNING *`,
            [
                surname,
                name,
                patron,
                bet,
                phone,
                day,
                status,
                recruitor,
                comment,
                id,
            ]
        );
        res.json(updateWorker.rows[0]);
    }

    async deleteWorker(req, res) {
        const id = req.params.id;
        const deleteWorker = await db.query(
            `DELETE FROM worker WHERE id = $1`,
            [id]
        );
        res.json(`Работник успешно удален`);
    }
}

module.exports = new WorkerController();
