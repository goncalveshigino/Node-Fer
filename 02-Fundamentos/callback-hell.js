

const empleados = [

    {
        id: 1,
        nombre: 'Higino'
    },

    {
        id: 2,
        nombre: 'Luiz'
    },

    {
        id: 3,
        nombre: 'Katiavala'
    }


];



const salarios = [

    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 1500
    },

];


const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( (e) => e.id === id);

     if( empleado ){
         callback(null, empleado.nombre );
     } else {
        callback(` Empleado com id ${ id } no existe`);
     }
}


getSalario = (id, callback ) => {
     
    const salario = salarios.find( (s) => s.id === id)?.salario;

    if( salario ){
        callback(null, salario)
    } else {
        callback(` Salario com id ${ id } no existe`)
    }
}

const id = 3

getEmpleado( id, ( err, empleado ) => {
   
    if( err ){
        console.log('ERROR!')
        return console.log(err)
    }
    
    getSalario(id, (err, salario) => {

        if( !err ){
          
            console.log('el empleado:', empleado, 'tiene un salario de:', salario);

        }else {
            console.log('ERROR!');
            return console.log(err);
        }

    })

})

// hsgshshshshshs
