
const fs = require('fs');

const crearArchivo = async( base = 5, listar = false ) => { 

   try {

  
      let salida = '';

      for( let i = 1; i <=10; i++){
      
        salida += `${ base } X ${ i } = ${ base * i }\n`;  
      }
     
     if (listar) {
       console.log('========================');
       console.log('Tabela de :', base);
       console.log('=========================');

       console.log(salida);
     }
      
     
        
      fs.writeFileSync( `tabela-${ base }.txt`, salida );
      
      return `tabela-${ base }.txt`; 
     
   } catch (err) {
     throw err;
   }

}

module.exports = {
    crearArchivo
}