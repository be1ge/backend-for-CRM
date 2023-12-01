const db = require('../db');

class ProjectController {
    async createProject(req, res) {
        try {
            const { serial, title, status, comment, client } = req.body;
            const newProject = await db.query(
                `INSERT INTO project (serial, title, status, comment, client) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [serial, title, status, comment, client]
            );
            res.json(newProject.rows[0]);
        } catch (error) {
            res.status(500).json({
                message: 'Вводимый вами контрагент не существует',
            });
        }
    }

    async getAllProjects(req, res) {
        const getAllProjects = await db.query(`SELECT * FROM project`);
        res.json(getAllProjects.rows);
    }
    async getOneProject(req, res) {
        const id = req.params.id;
        const getOneProject = await db.query(
            `SELECT * FROM project WHERE id = $1`,
            [id]
        );
        res.json(getOneProject.rows[0]);
    }

    async updateProject(req, res) {
        const { serial, title, status, comment, client, id } = req.body;
        const updateProject = await db.query(
            `UPDATE project SET serial = $1, title = $2, status = $3, comment = $4, client = $5 WHERE id = $6 RETURNING * `,
            [serial, title, status, comment, client, id]
        );
        res.json(updateProject.rows[0]);
    }
    async deleteProject(req, res) {
        const id = req.params.id;
        const deleteProject = await db.query(
            `DELETE FROM project WHERE id = $1`,
            [id]
        );
        res.json('Проект успешно удалён');
    }
}

module.exports = new ProjectController();
