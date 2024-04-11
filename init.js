const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require('dotenv').config();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("get API\n" + JSON.stringify(req.query) + "\n");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("post API\n" + JSON.stringify(req.body) + "\n");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "Dummy Server is running...");
});


