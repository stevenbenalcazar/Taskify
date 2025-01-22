exports.createList = async (req, res) => {
    try {
        const { name, boardId } = req.body;
        if (!name || !boardId) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        // Aquí iría la lógica para guardar en la base de datos
        res.status(201).json({ message: 'Lista creada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};

exports.getListsByBoard = async (req, res) => {
    try {
        const { boardId } = req.params;
        // Aquí iría la lógica para obtener listas de la base de datos
        res.status(200).json({ message: `Listas del tablero ${boardId}` });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};
