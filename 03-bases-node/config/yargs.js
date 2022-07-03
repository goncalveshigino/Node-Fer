const { describe } = require('yargs');

const argv = require('yargs')
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostra a tabela de multiplicar'
    })
    .option('t', {
        alias: 'ate',
        type: 'number',
        default: 20,
        describe: 'Este é o numero ate onde chega a tabela'
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'É a base da tabela de multiplicação'
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw 'A base tem que ser numero'
        }
        return true;
    })
    .argv;


module.exports = argv;