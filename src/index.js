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
    
    const repo = new repository();
    // const response = await repo.get('66a5bb55d63e04ead9d75060');
    const response = await repo.getAll(0,5);
    console.log(response[2].userNameWithEmail);
}

startAndStopServer();