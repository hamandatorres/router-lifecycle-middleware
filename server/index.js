const express = require('express');
const Ctrl = require('./Ctrl/Ctrl');
const middleware = require('./Ctrl/middleware/middleware');

const SERVER_PORT = 4000
const app = express();

app.use(express.json())

app.post('/api/string', middleware.checkValidString, Ctrl.successfulStringMessage)

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))