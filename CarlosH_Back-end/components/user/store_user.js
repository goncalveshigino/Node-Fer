const Model = require('./model_user');


function addUser(user) {

    const myUser = new Model(user);
    return myUser.save();

}



//Listar usuarios
function listUsers(){
    return Model.find();
}


module.exports = {
    add: addUser,
    list: listUsers
}