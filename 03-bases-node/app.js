

const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')


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



crearArchivo(argv.b, argv.l, argv.t )
      .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
      .catch(err => console.log(err));