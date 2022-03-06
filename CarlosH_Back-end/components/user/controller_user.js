const { Model } = require('mongoose');
const store = require('./store_user');

//Adicionar usuarios
function addUser(name){
    if(!name){
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };

    return store.add(user);
}


//Listar usuarios
function listUsers(){
    return store.list();
}

module.exports = {
    addUser,
    listUsers
}