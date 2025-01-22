const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const workspaceRoutes = require('./routes/workspaceRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/workspaces', workspaceRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Microservicio Workspace corriendo en el puerto ${PORT}`));
console.log("Starting Taskify Workspace service...");