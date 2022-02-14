const mongoose = require('mongoose');

const dbConnection = async () => {
    

    try {

        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        
        console.log('DB Online')
        
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao inicializar a base de dados');
    }
}

module.exports = {
    dbConnection
}