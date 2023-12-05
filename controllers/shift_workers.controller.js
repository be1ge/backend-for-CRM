const db = require('../db');

class Shift_WorkerController {
    async createShift_Worker(req, res) {
        const {
            shift,
            worker_id,
            worker_instruction,
            worker_bet,
            worker_start,
            worker_end,
            worker_lunch,
            worker_summary,
            worker_type,
        } = req.body;
        const newShift_Worker = await db.query(
            `INSERT INTO shift_Workers (shift, worker_id, worker_instruction, worker_bet, worker_start, worker_end, worker_lunch, worker_summary, worker_type) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * `,
            [
                shift,
                worker_id,
                worker_instruction,
                worker_bet,
                worker_start,
                worker_end,
                worker_lunch,
                worker_summary,
                worker_type,
            ]
        );
        res.json(newShift_Worker.rows[0]);
    }
    async getAllShift_Workers(req, res) {
        const getAllShift_Workers = await db.query(
            `SELECT * FROM shift_Workers ORDER BY id ASC`
        );
        res.json(getAllShift_Workers.rows);
    }
    async getOneShift_Worker(req, res) {
        const id = req.params.id;
        const getOneShift_Worker = await db.query(
            `SELECT * FROM shift_Workers WHERE id = $1`,
            [id]
        );
        res.json(getOneShift_Worker.rows[0]);
    }
    async updateShift_Worker(req, res) {
        const {
            id,
            shift,
            worker_id,
            worker_instruction,
            worker_bet,
            worker_start,
            worker_end,
            worker_lunch,
            worker_summary,
            worker_type,
        } = req.body;
        const updateShift_Worker = await db.query(
            `UPDATE shift_Workers SET shift = $1, worker_id = $2, worker_instruction = $3, worker_bet = $4, worker_start = $5, worker_end = $6, worker_lunch = $7, worker_summary = $8, worker_type = $9 WHERE id = $10 RETURNING * `,
            [
                shift,
                worker_id,
                worker_instruction,
                worker_bet,
                worker_start,
                worker_end,
                worker_lunch,
                worker_summary,
                worker_type,
                id,
            ]
        );
        res.json(updateShift_Worker.rows[0]);
    }
    async deleteShift_Worker(req, res) {
        const id = req.params.id;
        const deleteShift_Worker = await db.query(
            `DELETE FROM shift_Workers WHERE id = $1`,
            [id]
        );
        res.json('Клиент успешно удален');
    }
}

module.exports = new Shift_WorkerController();
