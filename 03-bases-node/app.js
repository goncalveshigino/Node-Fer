
const { options, demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');



console.clear();

//console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base );

// console.log(process.argv);

// const [, , arg3 = 'base5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);


// // const base = 3;

// crearArchivo(base)
//       .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//       .catch(err => console.log(err));



crearArchivo(argv.base, argv.listar)
      .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
      .catch(err => console.log(err));