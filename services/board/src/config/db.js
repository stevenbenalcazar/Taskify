const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado para board');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        process.exit(1);
    }
};
module.exports = connectDB;
