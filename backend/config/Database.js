const mongoose = require('mongoose');


const connectDatabase = ()=>{
    const newLocal = process.env.DB_URI;
    mongoose.connect(newLocal).then((data)=>{
        console.log(`Mongodb connection established:${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
    });

}

module.exports = connectDatabase