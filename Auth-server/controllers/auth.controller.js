const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')




const createUser = async (req, res = response) => {

    const { name, email, password } = req.body;
 
    try {
         
      //Verificar se nao existe o email
        const user = await User.findOne({ email: email });
        
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Este email ja existe'
            })
        }

        const dbUser = new User(req.body);
        
        //Hashear a senha
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        //Generar el JWT
         const token = await generarJWT( dbUser.id, name );
        //Criar usuario de DB
        dbUser.save();
        
        //Generar resposta
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        });
         
     } catch (error) {

      return res.json({
        ok: false,
        msg: 'Criar usuario'
      });

     }
}


const loginUser = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        const dbUser = await User.findOne({ email: email });

        if ( !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'Algo deu errado por favor tente novamente'
            });
        }

        const validPassword = bcrypt.compareSync(password, dbUser.password);
        
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Palavra passe errada'
            });
        }

        //Generar JWT
        const token = await generarJWT(dbUser.id, dbUser.name);
        
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        })
        
    } catch (error) {
        console.log(error);

        return res.json({
            ok: true,
            msg: 'Login de usuario'
        });
    }

}


const revalidarToken = async (req, res = response) => {
    
    const { uid } = req;

    //Ler a base de dados
    const dbUser = await User.findById(uid);



    const token = await generarJWT(uid, dbUser.name );
   
    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    })

}


module.exports = {

    createUser,
    loginUser,
    revalidarToken
}