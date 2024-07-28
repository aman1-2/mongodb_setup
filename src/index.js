const express = require('express');

const dbConnect = require('./config/database');
const User = require('./Model/user');
const repository = require('./repository/crud-repository');

PORT = 3000;

const startAndStopServer = async () => {
    const app = express(); 

    await dbConnect();
    
    app.listen(PORT, () => {
        console.log(`Server started at Port: ${PORT}`);
    });

    // const repo = new repository();
    // const user = await repo.create({name: 'krishna', email: 'd@e.com'});
    // console.log(user);
}

startAndStopServer();