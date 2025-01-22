const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/boards', require('./routes/boardRoutes'));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
