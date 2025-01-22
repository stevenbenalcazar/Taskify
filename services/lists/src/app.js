const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const listRoutes = require('./routes/listRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error en la conexión a la base de datos:', err));

app.use('/api/lists', listRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

