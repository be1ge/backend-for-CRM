const db = require('../db');

class ShiftController {
    async createShift(req, res) {
        const { date, master, instruction, statement, day, done } = req.body;
        const newShift = await db.query(
            `INSERT INTO shift (date, master, instruction, statement, day, done) values ($1, $2, $3, $4, $5, $6) RETURNING * `,
            [date, master, instruction, statement, day, done]
        );
        res.json(newShift.rows[0]);
    }
    async getAllShifts(req, res) {
        const getAllShifts = await db.query(
            `SELECT * FROM shift ORDER BY id ASC`
        );
        res.json(getAllShifts.rows);
    }
    async getOneShift(req, res) {
        const id = req.params.id;
        const getOneShift = await db.query(
            `SELECT * FROM shift WHERE id = $1`,
            [id]
        );
        res.json(getOneShift.rows[0]);
    }
    async updateShift(req, res) {
        const { id, date, master, instruction, statement, day, done} = req.body;
        const updateShift = await db.query(
            `UPDATE shift SET date = $1, master = $2, instruction = $3, statement = $4, day = $5, done = $6 WHERE id = $7 RETURNING * `,
            [date, master, instruction, statement, day, done, id]
        );
        res.json(updateShift.rows[0]);
    }
    async deleteShift(req, res) {
        const id = req.params.id;
        const deleteShift = await db.query(`DELETE FROM shift WHERE id = $1`, [
            id,
        ]);
        res.json('Смена успешно удалена');
    }
}

module.exports = new ShiftController();
