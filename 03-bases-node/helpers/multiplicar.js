
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar = false, ate = 20) => { 

   try {

  
     let salida = '';
     let consola = '';
     

      for( let i = 1; i <=ate; i++){
      
        salida += `${base} X ${i} = ${base * i}\n`;  
        consola += `${base} ${'X'.green} ${i} ${'='.yellow} ${base * i}\n`;  
      }
     
     if (listar) {
       console.log('========================'.green);
       console.log('Tabela de :'.green, colors.blue( base ));
       console.log('========================='.green);

       console.log(consola);
     }
      
     
        
      fs.writeFileSync( `./saida/tabela-${ base }.txt`, salida );
      
      return `tabela-${ base }.txt`; 
     
   } catch (err) {
     throw err;
   }

}

module.exports = {
    crearArchivo
}