const argv = require('yargs')
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw 'A base tem que ser numero'
        }
        return true;
    })
    .argv;