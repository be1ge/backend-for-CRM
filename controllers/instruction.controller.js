const db = require('../db');

class InstructionController {
    async createInstruction(req, res) {
        const {
            datetime,
            serial,
            summary,
            article,
            project,
            bet,
            component1_title,
            component1_summary,
            component2_title,
            component2_summary,
        } = req.body;
        const newInstruction = await db.query(
            `INSERT INTO instruction (datetime, serial, summary, article, project, bet, component1_title, component1_summary, component2_title, component2_summary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [
                datetime,
                serial,
                summary,
                article,
                project,
                bet,
                component1_title,
                component1_summary,
                component2_title,
                component2_summary,
            ]
        );
        res.json(newInstruction.rows[0]);
    }

    async getAllInstructions(req, res) {
        const getAllInstructions = await db.query(
            `SELECT * FROM instruction ORDER BY id ASC`
        );
        res.json(getAllInstructions.rows);
    }

    async getOneInstruction(req, res) {
        const id = req.params.id;
        const getOneInstruction = await db.query(
            `SELECT * FROM instruction WHERE id = $1`,
            [id]
        );
        res.json(getOneInstruction.rows[0]);
    }

    async updateInstruction(req, res) {
        const {
            id,
            datetime,
            serial,
            summary,
            article,
            project,
            bet,
            component1_title,
            component1_summary,
            component2_title,
            component2_summary,
        } = req.body;
        const updateInstruction = await db.query(
            `UPDATE instruction SET datetime = $1, serial = $2, summary = $3, article = $4, project = $5, bet = $6, component1_title = $7, component1_summary = $8, component2_title = $9, component2_summary = $10 WHERE id = $11 RETURNING *`,
            [
                datetime,
                serial,
                summary,
                article,
                project,
                bet,
                component1_title,
                component1_summary,
                component2_title,
                component2_summary,
                id,
            ]
        );
        res.json(updateInstruction.rows[0]);
    }

    async deleteInstruction(req, res) {
        const id = req.params.id;
        const deleteInstruction = await db.query(
            `DELETE FROM instruction WHERE id = $1`,
            [id]
        );
        res.json('Инструкция успешно удалена');
    }
}

module.exports = new InstructionController();
