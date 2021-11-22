const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const port = 3300;
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var rootRoutes = require('./routes/root.routes');

app.use('/api/v1', rootRoutes);

server.listen(port, (req, res) => {
    console.log('server listening on port 5000...');
})