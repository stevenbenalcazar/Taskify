import dynamoDB from '../config/db.js';

const TABLE_NAME = process.env.DYNAMODB_TABLE;

export const createCard = async (req, res) => {
    const { title, description, listId, dueDate } = req.body;
    if (!title || !listId) {
        return res.status(400).json({ error: "Title and listId are required" });
    }

    const card = {
        id: new Date().getTime().toString(),
        title,
        description,
        listId,
        dueDate,
        createdAt: new Date().toISOString()
    };

    try {
        await dynamoDB.put({ TableName: TABLE_NAME, Item: card }).promise();
        res.status(201).json(card);
    } catch (error) {
        res.status(500).json({ error: "Error saving card" });
    }
};