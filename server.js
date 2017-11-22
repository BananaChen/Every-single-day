const express = require('express');
const app = express();
const port = 2266;

app.use(express.static(__dirname+'/public'));

app.listen(port);

//hohho
