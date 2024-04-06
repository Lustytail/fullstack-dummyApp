const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require('dotenv').config();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("get API");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("post API");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "대기중");
});


