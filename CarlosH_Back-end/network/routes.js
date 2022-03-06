const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network_user');
const chat = require('../components/chat/network_chat');


const routes = function (server) {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat)
}

module.exports = routes;