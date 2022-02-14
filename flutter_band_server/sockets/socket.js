const { io } = require('../index');

const Band = require('../models/band');
const Bands = require('../models/bands');

//Nova instancia da class Bands
const bands = new Bands();

bands.addBand( new Band( 'Breaking Benjamin' ) );
bands.addBand( new Band( 'Bon Jovi' ) );
bands.addBand( new Band( 'Héroes del Silencio' ) );
bands.addBand( new Band( 'Metallica' ) );




//Mensagem de socket
io.on('connection', client => {

    console.log('Cliente conectado');

    client.emit('active-bands', bands.getBands());
    

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });


    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);
        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    });

  
    client.on('vote-band', (payload) => {

        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });

    client.on('add-band', (payload) => {

        const newBand = new Band( payload.name );
        bands.addBand(newBand);
        io.emit('active-bands', bands.getBands() );
    });

    client.on('delete-band', ( payload ) => {
        
        bands.deleteBand( payload.id );
        io.emit('active-bands', bands.getBands());

    });
    

    /*client.on('emitir-mensagem', (payload) => {
        // io.emit('Nova mensagem', payload ); //emite a todos  
        client.broadcast.emit('nova-mensagem', payload); //emite a todos menos quem emitiu
    })*/


});