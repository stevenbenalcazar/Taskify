const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
    try {
        const board = new Board({ ...req.body, owner: req.user.id });
        await board.save();
        res.status(201).json(board);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el tablero' });
    }
};
