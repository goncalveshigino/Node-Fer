const { Schema, model } = require('mongoose');


const mySchema = new Schema({


    users: {
        type: Schema.ObjectId,
        ref: 'User'
    }
      

});



module.exports = model('Chat', mySchema);

