const db = require('mongoose');


const dbConnection = async () => {
    

    try {
        await db.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,      
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