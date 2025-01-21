const Workspace = require('../models/Workspace');

exports.createWorkspace = async (req, res) => {
    const { name, description } = req.body;
    const userId = req.user.id; // Tomado desde JWT

    try {
        const workspace = new Workspace({
            name,
            description,
            createdBy: userId
        });

        await workspace.save();
        res.status(201).json({ message: 'Workspace creado con éxito', workspace });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear workspace', error });
    }
};
